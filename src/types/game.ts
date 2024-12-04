export type Position = {
    x: number;
    y: number;
};

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export type GameState = {
    snake: Position[];
    food: Position;
    direction: Direction;
    nextDirection: Direction;
    isGameOver: boolean;
    score: number;
    isGameStarted: boolean;
};

export const GRID_SIZE = 20;
export const CELL_SIZE = 20;
export const GAME_SPEED = 100;
