import { memo } from "react";
import GameBoard from "./components/GameBoard";
import useGameLogic from "./hooks/useGameLogic";
import ArrowKeys from "./components/ArrowKeys";
import { Direction } from "./types/game";

const App = memo(() => {
    const { snake, food, score, isGameOver, resetGame, changeDirection } = useGameLogic();

    const handleDirectionChange = (direction: string) => {
        changeDirection(direction as Direction);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center mb-4">
                <h1 className="text-4xl font-bold mb-2">Snake</h1>
                <p className="text-xl mb-4">Score: {score}</p>
            </div>

            <GameBoard snake={snake} food={food} />

            {isGameOver && (
                <div className="mt-4 text-center">
                    <p className="text-xl font-bold text-red-600 mb-2">Game Over!</p>
                    <button
                        onClick={resetGame}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Play Again
                    </button>
                </div>
            )}

            <ArrowKeys onDirectionChange={handleDirectionChange} />

            <div className="mt-4 text-sm text-gray-600">Use arrow keys to control the snake</div>
        </div>
    );
});

App.displayName = "App";
export default App;
