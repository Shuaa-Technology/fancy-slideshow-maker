import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Slide from "../../Core/Models/Slide/Slide";
import { RootState } from "../store";
import { SlideInterface } from "../../Core/Models/Slide/SlideInterface";
import FancySimpleImage from "../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import Scene from "../../Core/Models/Slide/Scene/Scene";
import FancyElement from "../../Core/Models/FancyElements/FancyElement";
import { cloneDeep } from "lodash";
import { FancyElementInterface } from "../../Core/Models/FancyElements/FancyElementInterface";
import { randomBytes } from "crypto";


// Now create the DUMMY_SLIDES array using the Slide class
const DUMMY_SLIDES: Slide[] = Array.from({ length: 10 }, (_, index) => {
  const scences = [
    new Scene("RANDOM SCENE").setElements(
      /* generateDummyElements(index) */[]
    ),
  ];

  return new Slide(
    `slide-${index + 1}`,
    `Slide ${index + 1}`,
    `thumbnail-url-${index + 1}`,
    `Description ${index + 1}`
  ).setScenes(scences);
});

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
    selectSlide: (state, action: PayloadAction<SlideInterface>) => {
      // Update the selectedSlide state with the found slide (or null if not found)
      Object.assign(state, {
        selectedSlide: action.payload,
      });
    },

    updateViewportElement: (state, action: PayloadAction<FancyElementInterface>) => {
      if (state.selectedSlide) {
        let updatedScene = state.selectedSlide.getScene();
        if (updatedScene) {
          updatedScene.updateElement(action.payload);
          console.log(action.payload)
          state.selectedSlide.setScene(updatedScene); // Directly modify state
        }
      }
    },
    addImage: (state, action: PayloadAction<string>) => {
      let updatedSlide = state.selectedSlide;

      if (updatedSlide) {
        let elem = new FancySimpleImage(
          (Math.random() + 1).toString(36).substring(7),
          `Element`,
          `thumbnail.jpg`,
          `Description`,
          action.payload
        );

        elem.position = { x: Math.floor(Math.random() * 200), y: Math.floor(Math.random() * 400) };


        if (updatedSlide) {
          let updatedSlideClone = cloneDeep(updatedSlide);
          let updatedScene = updatedSlideClone.getScene();
          if (updatedScene) {
            updatedScene!.addElement(elem);
            updatedSlide.setScenes([]);
            updatedSlide.setScene(updatedScene);
          }

          Object.assign(state, {
            selectedSlide: updatedSlideClone,
          });
        }
      }
    },
  },
});
export const { selectSlide, addImage, updateViewportElement } = slidesSlice.actions;
// State selectors
export const getSelectedSlide = (state: RootState) =>
  state.slides.selectedSlide;
export const getSlides = (state: RootState) => state.slides.entries;

export default slidesSlice.reducer;
//Dummy slides
const generateDummyElements = (seed: number): FancyElement[] => {
  const dummyElements: FancyElement[] = [];

  // Create and push dummy elements into the array with positions and dimensions
  for (let i = 1; i <= 6; i++) {
    const element = new FancySimpleImage(
      i.toString(),
      `Element ${i}${seed} `,
      `thumbnail${i}${seed}.jpg`,
      `Description ${i}${seed}`,
      `https://picsum.photos/200/300?random=${i}${seed}`
    );

    // Assign random positions and dimensions
    element.position = { x: Math.random() * 100, y: Math.random() * 100 };
    element.dimensions = {
      height: Math.random() * 200,
      width: Math.random() * 200,
    };

    dummyElements.push(element);
  }

  return dummyElements;
};