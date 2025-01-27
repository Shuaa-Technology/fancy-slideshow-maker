import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Slide from "../../Core/Models/Slide/Slide";
import { RootState } from "../store";
import { SlideInterface } from "../../Core/Models/Slide/SlideInterface";
import FancySimpleImage from "../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import Scene from "../../Core/Models/Slide/Scene/Scene";
import FancyElement from "../../Core/Models/FancyElements/FancyElement";
import { cloneDeep } from "lodash";
import Project from "../../Core/Models/Project/Project";
import { ProjectInterface } from "../../Core/Models/Project/ProjectInterface";


// Now create the DUMMY_SLIDES array using the Slide class
const DUMMY_PROJECTS: Project[] = Array.from({ length: 10 }, (_, index) => {

  return new Project(
    `project-${index + 1}`,
    `Project ${index + 1}`,
    `thumbnail-url-${index + 1}`,
    `Description ${index + 1}`
  ).setSlides([]);
});


export interface ProjectsState {
  entries: ProjectInterface[];
  currentProject: ProjectInterface;
  status: "idle" | "loading" | "failed";
}

const initialState: ProjectsState = {
  entries: DUMMY_PROJECTS,
  status: "idle",
  currentProject: DUMMY_PROJECTS[0],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    selectProject: (state, action: PayloadAction<ProjectInterface>) => {
      // Update the selectedSlide state with the found slide (or null if not found)
      Object.assign(state, {
        currentProject: action.payload,
      });
    },

  },
});
export const { selectProject } = projectsSlice.actions;
// State selectors
export const getCurrentProject = (state: RootState) =>
  state.projects.currentProject;
export const getSlides = (state: RootState) => state.projects.entries;

export default projectsSlice.reducer;
//Dummy slides