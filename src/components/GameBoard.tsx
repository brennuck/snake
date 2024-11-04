import { memo } from "react";
import { Position, CELL_SIZE, GRID_SIZE } from "../types/game";

type GameBoardProps = {
    snake: Position[];
    food: Position;
};

const GameBoard = memo(({ snake, food }: GameBoardProps) => {
    return (
        <div
            style={{
                width: GRID_SIZE * CELL_SIZE,
                height: GRID_SIZE * CELL_SIZE,
                border: "2px solid #333",
                position: "relative",
                backgroundColor: "#f0f0f0",
            }}
        >
            {snake.map((segment, index) => (
                <div
                    key={`${segment.x}-${segment.y}-${index}`}
                    style={{
                        position: "absolute",
                        width: CELL_SIZE - 2,
                        height: CELL_SIZE - 2,
                        backgroundColor: index === 0 ? "#2c3e50" : "#34495e",
                        border: "1px solid #2c3e50",
                        left: segment.x * CELL_SIZE,
                        top: segment.y * CELL_SIZE,
                    }}
                />
            ))}
            <div
                style={{
                    position: "absolute",
                    width: CELL_SIZE - 2,
                    height: CELL_SIZE - 2,
                    backgroundColor: "#e74c3c",
                    border: "1px solid #c0392b",
                    left: food.x * CELL_SIZE,
                    top: food.y * CELL_SIZE,
                    borderRadius: "50%",
                }}
            />
        </div>
    );
});

GameBoard.displayName = "GameBoard";
export default GameBoard;
