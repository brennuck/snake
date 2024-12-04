import { memo } from "react";
import { Position, CELL_SIZE, GRID_SIZE } from "../types/game";
import useGameLogic from "../hooks/useGameLogic";

type GameBoardProps = {
    snake: Position[];
    food: Position;
    isGameStarted: boolean;
};

const GameBoard = memo(({ snake, food, isGameStarted }: GameBoardProps) => {
    const { calculateCellSize } = useGameLogic();
    const cellSize = calculateCellSize() || CELL_SIZE;

    return (
        <div
            className="relative border-2 border-gray-800 bg-gray-200"
            style={{
                width: GRID_SIZE * cellSize,
                height: GRID_SIZE * cellSize,
            }}
        >
            {snake.map((segment, index) => (
                <div
                    key={`${segment.x}-${segment.y}-${index}`}
                    className={`absolute border ${index === 0 ? "bg-gray-800" : "bg-gray-700"} border-gray-800`}
                    style={{
                        width: cellSize - 2,
                        height: cellSize - 2,
                        left: segment.x * cellSize,
                        top: segment.y * cellSize,
                    }}
                />
            ))}
            {isGameStarted && (
                <div
                    className="absolute bg-red-500 border border-red-700 rounded-full"
                    style={{
                        width: cellSize - 2,
                        height: cellSize - 2,
                        left: food.x * cellSize,
                        top: food.y * cellSize,
                    }}
                />
            )}
        </div>
    );
});

GameBoard.displayName = "GameBoard";
export default GameBoard;
