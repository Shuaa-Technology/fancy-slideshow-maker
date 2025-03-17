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

// we have an enum or type for element types for now
type ElementType = 'image' | 'text' | 'shape'; 

const DUMMY_SLIDES: Slide[] = Array.from({ length: 10 }, (_, index) => {
  const scences = [
    new Scene("RANDOM SCENE").setElements(
    /*   generateDummyElements(index) */ []
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
      if (state.selectedSlide) {
        const selectedIndex = state.entries.findIndex(
          slide => slide.id === state.selectedSlide.id
        );
        
        if (selectedIndex !== -1) {
          //update the current slide in the entries array to preserve changes
          state.entries[selectedIndex] = cloneDeep(state.selectedSlide);
        }
      }
      
      const slideId = action.payload.id;
      const slideToSelect = state.entries.find(slide => slide.id === slideId);
      
      if (slideToSelect) {
        state.selectedSlide = cloneDeep(slideToSelect);
      } else {
        console.warn(`Slide with ID ${slideId} not found`);
      }
    },

    updateViewportElement: (state, action: PayloadAction<FancyElementInterface>) => {
      if (!state.selectedSlide) return;

      const element = action.payload;
      if (!element?.id || typeof element.position !== "object") {
        console.warn("updateViewportElement: Invalid element - missing required properties");
        return;
      }

      const scene = state.selectedSlide.getScene();
      if (!scene) {
        console.warn("updateViewportElement: No scene available in selected slide");
        return;
      }

      try {
        const updatedScene = (scene as Scene).clone().updateElement(element);
        state.selectedSlide = (state.selectedSlide as Slide).clone().setScene(updatedScene);
        
        const slideIndex = state.entries.findIndex(
          slide => slide.id === state.selectedSlide.id
        );
        
        if (slideIndex !== -1) {
          const entryScene = state.entries[slideIndex].getScene();
          if (entryScene) {
            const updatedEntryScene = (entryScene as Scene).clone().updateElement(element);
            state.entries[slideIndex] = (state.entries[slideIndex] as Slide).clone().setScene(updatedEntryScene);
          }
        }
      } catch (error) {
        console.error("updateViewportElement: Error updating element:", error);
      }
    },

    addViewportElement: (state, action: PayloadAction<FancyElementInterface>) => {
      if (!state.selectedSlide) return;
      
      let elem = action.payload;
      const scene = state.selectedSlide.getScene();
      
      if (scene) {
        const updatedScene = (scene as Scene).clone().addElement(elem);
        state.selectedSlide = (state.selectedSlide as Slide).clone().setScene(updatedScene);
        
        const slideIndex = state.entries.findIndex(
          slide => slide.id === state.selectedSlide.id
        );
        
        if (slideIndex !== -1) {
          const entryScene = state.entries[slideIndex].getScene();
          if (entryScene) {
            const updatedEntryScene = (entryScene as Scene).clone().addElement(elem);
            state.entries[slideIndex] = (state.entries[slideIndex] as Slide).clone().setScene(updatedEntryScene);
          }
        }
      }
    },
  },
});



// Dummy slides
const generateDummyElements = (seed: number): FancyElement[] => {
  const dummyElements: FancyElement[] = [];

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
export const { selectSlide, addViewportElement, updateViewportElement } = slidesSlice.actions;

// State selectors
export const getSelectedSlide = (state: RootState) => state.slides.selectedSlide;
export const getSlides = (state: RootState) => state.slides.entries;

export default slidesSlice.reducer;
