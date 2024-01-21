import React from "react";
import style from "./MainContainer.module.css";
import SlidesList from "../../../../Components/Slides/SlidesList/SlidesList";
import Renderer from "../../../../Components/Renderer/Renderer";

function MainContainer() {
  return (
      <div className={style.MainContainer}>
        <div className={style.MainContainerMain}>
            <Renderer />
        </div>
        <div className={style.MainContainerFooter}>
          <SlidesList></SlidesList>
        </div>
      </div>
  );
}

export default MainContainer;
