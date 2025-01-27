import { configureStore } from '@reduxjs/toolkit'
import slidesSlice from "./slices/slidesSlice";
import projectsSlice from './slices/projectsSlice';


export const store = configureStore({
  reducer: {
    projects: projectsSlice
    ,slides: slidesSlice
  }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch