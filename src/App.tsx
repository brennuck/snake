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
                <div className="flex justify-center gap-1 mb-2">
                    {/* S */}
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    {/* N */}
                    <div className="ml-2 flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    {/* A */}
                    <div className="ml-2 flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    {/* K */}
                    <div className="ml-2 flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    {/* E */}
                    <div className="ml-2 flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                        <div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-gray-800"></div>
                    </div>
                </div>
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

            {!isGameOver && (
                <>
                    <ArrowKeys onDirectionChange={handleDirectionChange} />
                    <div className="mt-4 text-sm text-gray-600">Use arrow keys to control the snake</div>
                </>
            )}
        </div>
    );
});

App.displayName = "App";
export default App;
