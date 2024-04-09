import { createSelector, createSlice } from '@reduxjs/toolkit';
import Slide from "../../Core/models/slide/Slide";
import {RootState} from "../store";
import {SlideInterface} from "../../Core/models/slide/SlideInterface";


//Dummy slides
const DUMMY_SLIDES: SlideInterface[] = Array.from({ length: 10 }, (_, index) => ({
    id: `slide-${index + 1}`,
    title: `Slide ${index + 1}`,
    thumbnail: `thumbnail-url-${index + 1}`,
    version: 1, // Add appropriate values for the missing properties
    description: `Description ${index + 1}`,
}));

export interface SlidesState {
    entries: SlideInterface[];
    selectedSlide: SlideInterface
    status: "idle" | "loading" | "failed"
}

const initialState: SlidesState = {
    entries: DUMMY_SLIDES,
    status: "idle",
    selectedSlide: DUMMY_SLIDES[0],
};

export const slidesSlice = createSlice({
    name: 'slides',
    initialState,
    reducers: {
        //...
    }
});


// State selectors
export const selectSlides = (state: RootState) => state.slides.entries;

export default slidesSlice.reducer;
