import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"
import React from "react";

export const PoliticsSlider: React.FC<{ 
    onValChange: (number: number) => void,
    guess: number, 
    actual: number | null,
    handleClick: () => void 
}> = ({ onValChange, guess, actual, handleClick }) => {
    const sections = ["Links", "Mitte-Links", "Mitte", "Mitte-Rechts", "Rechts"];
    const [section, setSection] = React.useState(2);

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-xl relative">
                {/* Hintergrundabschnitte */}
                <div className="absolute w-full h-2 bg-gray-300 rounded">
                    {sections.map((_, index) => (
                        <div
                            key={index}
                            className={`absolute h-2 bg-black ${index == 0 && "rounded-l"} ${index == sections.length - 1 && "rounded-r"}`}
                            style={{
                                width: `${100 / (sections.length)}%`,
                                left: `${(index / (sections.length)) * 100}%`,
                            }}
                        />
                    ))}
                </div>
                <Slider
                    defaultValue={actual ? [guess, actual] : [guess]}
                    max={100}
                    onValueChange={(val) => {
                        onValChange(val[0]);
                        setSection(Math.max(Math.ceil(val[0] / 20) - 1, 0));
                    }}
                    step={1}
                />
                <div className="flex w-full justify-between mt-3">
                    <p className="text-3xl">{sections[section]}</p>
                    <Button onClick={handleClick}>Bewerten</Button>
                </div>
            </div>
        </div>
    )
}