import React from "react";
import style from "./LeftPanel.module.css";
import SlidesList from "../../../../Components/Slides/SlidesList";

function LeftPanel() {
    return (
        <div className={style.LeftPanel}>
            <SlidesList></SlidesList>
        </div>
    );
}

export default LeftPanel;
