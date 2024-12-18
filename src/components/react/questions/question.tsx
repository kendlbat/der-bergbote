import React from "react";

interface Question {
    question: String,
    isTrue: boolean
}

export const Question: React.FC<{questions: Question[]}> = ({ questions }) => {
    const [idx, setIdx] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const [rotation, setRotation] = React.useState(0);
    const [swipeDirection, setSwipeDirection] = React.useState<string | null>(null);
    const touchStartX = React.useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartX.current) return;

        const currentTouchX = e.touches[0].clientX;
        const deltaX = currentTouchX - touchStartX.current;

        setPosition(deltaX);
        setRotation(deltaX / 50);

        if (deltaX > 50) {
            setSwipeDirection("right");
        } else if (deltaX < -50) {
            setSwipeDirection("left");
        }
    };

    const handleTouchEnd = () => {
        if (Math.abs(position) > 50) setIdx(idx < 2 ? idx + 1 : idx);
        touchStartX.current = null; // Reset the starting point
        setPosition(0);
        setRotation(0);
    };

    return (
        <React.Fragment>
            <h3 className="text-2xl mt-2">Fragen:</h3>
            <div className="flex justify-center" style={{transform: `translateX(${position}px) rotate(${rotation}deg)`, transition: "transform 0.3s ease"}}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="bg-green-600 w-10" onClick={() => setIdx(idx < 2 ? idx + 1 : idx)}>
                    <svg className="w-6 h-6 text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                </div>
                <div className="bg-white px-2 text-black w-[calc(100%-5rem)] text-center">
                    {questions[idx].question}
                </div>
                <div className="bg-red-600 w-10" onClick={() => setIdx(idx < 2 ? idx + 1 : idx)}>
                    <svg className="w-6 h-6 text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </div>
            </div>
        </React.Fragment>
    )
}