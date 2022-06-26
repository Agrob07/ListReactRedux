import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./slices/ToDo";
export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});
