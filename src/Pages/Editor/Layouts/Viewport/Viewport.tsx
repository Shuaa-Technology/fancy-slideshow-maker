import React from "react";
import style from "./Viewport.module.css";
import SlidesList from "../../../../Components/Slides/SlidesList";
import SlideViewer from "../../../../Components/Slides/SlideViewer";

function Viewport() {
  return (
      <div className={style.Viewport}>
        <div className={style.ViewportMain}>
            <SlideViewer />
        </div>
        <div className={style.ViewportFooter}>
          <SlidesList></SlidesList>
        </div>
      </div>
  );
}

export default Viewport;
