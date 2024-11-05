import React from "react";

type ArrowKeysProps = {
    onDirectionChange: (direction: string) => void;
};

const ArrowKeys: React.FC<ArrowKeysProps> = ({ onDirectionChange }) => {
    return (
        <div className="flex flex-col items-center mt-4">
            <button
                onClick={() => onDirectionChange("UP")}
                className="w-10 h-10 m-1 bg-gray-200 border border-gray-300 rounded text-lg hover:bg-gray-300 transition-colors"
            >
                ↑
            </button>
            <div className="flex">
                <button
                    onClick={() => onDirectionChange("LEFT")}
                    className="w-10 h-10 m-1 bg-gray-200 border border-gray-300 rounded text-lg hover:bg-gray-300 transition-colors"
                >
                    ←
                </button>
                <button
                    onClick={() => onDirectionChange("DOWN")}
                    className="w-10 h-10 m-1 bg-gray-200 border border-gray-300 rounded text-lg hover:bg-gray-300 transition-colors"
                >
                    ↓
                </button>
                <button
                    onClick={() => onDirectionChange("RIGHT")}
                    className="w-10 h-10 m-1 bg-gray-200 border border-gray-300 rounded text-lg hover:bg-gray-300 transition-colors"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default ArrowKeys;
