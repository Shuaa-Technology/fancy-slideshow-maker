// ModeSwitcher.tsx

import React, { useState } from "react";
import { FaPalette, FaMagic, FaCube } from "react-icons/fa"; // Import icons from react-icons library
import style from "./ModeSwitcher.module.css";

interface Mode {
    id: number;
    name: string;
    icon: JSX.Element;
}

const modes: Mode[] = [
    { id: 1, name: "Design", icon: <FaPalette /> },
    { id: 2, name: "Prototype", icon: <FaMagic /> }
    // Add more modes as needed
];

function ModeSwitcher() {
    const [selectedMode, setSelectedMode] = useState<number>(modes[0].id);

    const handleModeToggle = (modeId: number) => {
        setSelectedMode(modeId);
        // Add logic for switching between modes here
    };

    return (
        <div className={style.ModeSwitcher}>
            {modes.map((mode) => (
                <div
                    key={mode.id}
                    className={`${style.modeBox} ${selectedMode === mode.id ? style.selectedMode : ""}`}
                    onClick={() => handleModeToggle(mode.id)}
                >
                    {mode.icon}
                </div>
            ))}
        </div>
    );
}

export default ModeSwitcher;
