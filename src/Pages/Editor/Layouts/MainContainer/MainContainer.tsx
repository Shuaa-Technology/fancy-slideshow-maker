import React from "react";
import style from "./MainContainer.module.css";
import SlidesList from "../../../../Components/Slides/SlidesList/SlidesList";
import Renderer from "../../../../Components/Renderer/Renderer";
import { useSelector } from "react-redux";
import { getSelectedElement, getSelectedSlide, getSlides } from "../../../../app/slices/slidesSlice";

function MainContainer() {
  // Select slides from the Redux store
  const slides = useSelector(getSlides);
  const selectedSlide = useSelector(getSelectedSlide);
  const selectedElement = useSelector(getSelectedElement);

  return (
    <div className={style.MainContainer}>
      <div className={style.MainContainerMain}>
        <Renderer  slides={slides} selectedSlide={selectedSlide} selectedElement = {selectedElement} />
      </div>
      <div className={style.MainContainerFooter}>
        <SlidesList slides={slides} selectedSlide={selectedSlide}></SlidesList>
      </div>
    </div>
  );
}

export default MainContainer;
