import { createSelector, createSlice } from "@reduxjs/toolkit";
import Slide from "../../Core/Models/Slide/Slide";
import { RootState } from "../store";
import { SlideInterface } from "../../Core/Models/Slide/SlideInterface";
import FancySimpleImage from "../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import Scene from "../../Core/Models/Slide/Scene/Scene";

//Dummy slides

const DUMMY_SLIDES: SlideInterface[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: `slide-${index + 1}`,
    title: `Slide ${index + 1}`,
    thumbnail: `thumbnail-url-${index + 1}`,
    version: 1, // Add appropriate values for the missing properties
    description: `Description ${index + 1}`,
    scences: [
      new Scene("RANDOM SCENE").addElement(
        new FancySimpleImage(
          "RANDOM IMAGE",
          "RANDOM NAME",
          "LORUM LORUM",
          "thumb link",
          `https://picsum.photos/200/300?random=${index}`
        )
      ),
    ],
  })
);

export interface SlidesState {
  entries: SlideInterface[];
  selectedSlide: SlideInterface;
  status: "idle" | "loading" | "failed";
}

const initialState: SlidesState = {
  entries: DUMMY_SLIDES,
  status: "idle",
  selectedSlide: DUMMY_SLIDES[0],
};

export const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    //...
  },
});

// State selectors
export const getSelectedSlide = (state: RootState) => state.slides.selectedSlide;
export const getSlides = (state: RootState) => state.slides.entries;

export default slidesSlice.reducer;
