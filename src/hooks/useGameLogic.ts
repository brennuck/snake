import { useState, useCallback, useEffect, useRef } from "react";
import { GameState, Position, Direction, GRID_SIZE } from "../types/game";

const getRandomPosition = (): Position => ({
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
});

const initialState: GameState = {
    snake: [{ x: 8, y: 8 }],
    food: getRandomPosition(),
    direction: "RIGHT",
    nextDirection: "RIGHT",
    isGameOver: false,
    score: 0,
};

const useGameLogic = () => {
    const [gameState, setGameState] = useState<GameState>(initialState);
    const gameLoopRef = useRef<number>();
    const lastUpdateTimeRef = useRef<number>(0);

    const moveSnake = useCallback((snake: Position[], direction: Direction): Position[] => {
        const head = snake[0];
        const newHead = { ...head };

        switch (direction) {
            case "UP":
                newHead.y = head.y - 1;
                break;
            case "DOWN":
                newHead.y = head.y + 1;
                break;
            case "LEFT":
                newHead.x = head.x - 1;
                break;
            case "RIGHT":
                newHead.x = head.x + 1;
                break;
        }

        return [newHead, ...snake.slice(0, -1)];
    }, []);

    const checkCollision = useCallback((head: Position, snake: Position[]): boolean => {
        // Check wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            return true;
        }
        // Check self collision
        return snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y);
    }, []);

    const generateNewFood = useCallback((snake: Position[]): Position => {
        let newFood: Position;
        do {
            newFood = getRandomPosition();
        } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
        return newFood;
    }, []);

    const updateGame = useCallback(
        (timestamp: number) => {
            if (!lastUpdateTimeRef.current) lastUpdateTimeRef.current = timestamp;

            const deltaTime = timestamp - lastUpdateTimeRef.current;
            if (deltaTime < 100) {
                gameLoopRef.current = requestAnimationFrame(updateGame);
                return;
            }

            lastUpdateTimeRef.current = timestamp;

            setGameState((prevState) => {
                if (prevState.isGameOver) return prevState;

                const newSnake = moveSnake(prevState.snake, prevState.nextDirection);
                const head = newSnake[0];

                if (checkCollision(head, prevState.snake)) {
                    return { ...prevState, isGameOver: true };
                }

                const hasEatenFood = head.x === prevState.food.x && head.y === prevState.food.y;

                if (hasEatenFood) {
                    const newFood = generateNewFood(newSnake);
                    return {
                        ...prevState,
                        snake: [head, ...prevState.snake],
                        food: newFood,
                        direction: prevState.nextDirection,
                        score: prevState.score + 1,
                    };
                }

                return {
                    ...prevState,
                    snake: newSnake,
                    direction: prevState.nextDirection,
                };
            });

            gameLoopRef.current = requestAnimationFrame(updateGame);
        },
        [moveSnake, checkCollision, generateNewFood]
    );

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        const key = event.key;

        setGameState((prevState) => {
            if (prevState.isGameOver) return prevState;

            const getNextDirection = (currentDirection: Direction, key: string): Direction => {
                const opposites = {
                    UP: "DOWN",
                    DOWN: "UP",
                    LEFT: "RIGHT",
                    RIGHT: "LEFT",
                };

                let newDirection = prevState.direction;

                switch (key) {
                    case "ArrowUp":
                        newDirection = "UP";
                        break;
                    case "ArrowDown":
                        newDirection = "DOWN";
                        break;
                    case "ArrowLeft":
                        newDirection = "LEFT";
                        break;
                    case "ArrowRight":
                        newDirection = "RIGHT";
                        break;
                    default:
                        return currentDirection;
                }

                return newDirection === opposites[currentDirection] ? currentDirection : newDirection;
            };

            const nextDirection = getNextDirection(prevState.direction, key);

            return {
                ...prevState,
                nextDirection,
            };
        });
    }, []);

    const changeDirection = useCallback((direction: Direction) => {
        setGameState((prevState) => {
            if (prevState.isGameOver) return prevState;

            const opposites = {
                UP: "DOWN",
                DOWN: "UP",
                LEFT: "RIGHT",
                RIGHT: "LEFT",
            };

            if (direction === opposites[prevState.direction]) {
                return prevState;
            }

            return {
                ...prevState,
                nextDirection: direction,
            };
        });
    }, []);

    const resetGame = useCallback(() => {
        setGameState(initialState);
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        gameLoopRef.current = requestAnimationFrame(updateGame);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, [handleKeyPress, updateGame]);

    return {
        snake: gameState.snake,
        food: gameState.food,
        score: gameState.score,
        isGameOver: gameState.isGameOver,
        resetGame,
        changeDirection,
    };
};

export default useGameLogic;
