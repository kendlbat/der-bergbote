import React from "react";
import { PoliticsSlider } from "./politicsSlider";

interface Question {
    question: String,
    isTrue: boolean
}

export const Question: React.FC<{questions: Question[]}> = ({ questions }) => {
    const [idx, setIdx] = React.useState(0);
    const [wrongAnswer, setWrongAnswer] = React.useState(false);
    const [position, setPosition] = React.useState(0);
    const [rotation, setRotation] = React.useState(0);
    const [val, setVal] = React.useState(50);
    const [sliderKey, setSliderKey] = React.useState(0);
    const actual = 30;

    const touchStartX = React.useRef<number | null>(null);

    function handleGuess() {
        const diff = Math.abs(val - actual)
        let multiplier;
        if (diff <= 20) multiplier = 3;
        else if (diff <= 40) multiplier = 2;
        else multiplier = 1;
        setSliderKey(1);
    }

    function handleQuestionAnswered(answer: boolean) {
        if (questions[idx].isTrue != answer) setWrongAnswer(true);
        else setIdx(idx + 1);
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartX.current) return;

        const currentTouchX = e.touches[0].clientX;
        const deltaX = currentTouchX - touchStartX.current;

        setPosition(deltaX);
        setRotation(deltaX / 50);
    };

    const handleTouchEnd = () => {
        
        if (Math.abs(position) > 50) handleQuestionAnswered(position < 0);
        touchStartX.current = null; // Reset the starting point
        setPosition(0);
        setRotation(0);
    };

    const calculateBackgroundColor = () => {
        if (position < 0) {
            return `rgba(22, 163, 74, ${Math.min(Math.abs(position) / 100, 1)})`;
        } else if (position > 0) {
            return `rgba(220, 38, 38, ${Math.min(Math.abs(position) / 100, 1)})`;
        }
        return "transparent";
    };

    const fadeAway = (col: number = 0) => {
        if (col == 1 && position < 0) return 1;
        if (col == 2 && position > 0) return 1;
        return 1 - Math.min(Math.abs(position) / 100, 1)
    }

    if (wrongAnswer) return (
        <React.Fragment>
            <h3 className="text-2xl">Falsch</h3>
            <p>Diese Frage hast du leider falsch beantwortet. Für diese Nachricht erhälst du keine Münzen</p>
        </React.Fragment>
    )

    if (idx <= 2) return (
        <React.Fragment>
            <h3 className="text-2xl mt-2">Fragen:</h3>
            <div className="flex justify-center rounded-lg" 
                style={{
                    transform: `translateX(${position}px) rotate(${rotation}deg)`,
                    backgroundColor: calculateBackgroundColor(),
                    transition: position === 0 ? "background-color 0.3s ease, transform 0.3s ease" : "none",
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="bg-green-600 w-10 content-center rounded-l-lg" 
                    onClick={() => handleQuestionAnswered(true)}
                    style={{opacity: fadeAway(1)}}
                >
                    <svg className="w-6 h-6 text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                </div>
                <div 
                    className="bg-white px-2 text-black w-[calc(100%-5rem)] text-center"
                    style = {{ opacity: fadeAway()}}
                >
                    {questions[idx].question}
                </div>
                <div 
                    className="bg-red-600 w-10 content-center rounded-r-lg" 
                    onClick={() => handleQuestionAnswered(false)}
                    style={{opacity: fadeAway(2)}}
                >
                    <svg className="w-6 h-6 text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </div>
            </div>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <h2 className="text-2xl mt-2">Politische Orientierung</h2>
            <PoliticsSlider 
                key={sliderKey} 
                onValChange={(val) => setVal(val)}
                guess={val}
                actual={sliderKey ? actual : null}
                handleClick={() => handleGuess()}
            />
        </React.Fragment>
    )
}