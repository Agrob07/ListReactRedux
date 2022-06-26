import { createSlice } from "@reduxjs/toolkit";

export const initState = {
  list: [],
};

export const toDoListSlice = createSlice({
  name: "todoList",
  initialState: initState,
  reducers: {
    addTask: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const taskListSelector = (state) => {
  return state.toDoList.list;
};

export const { addTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;
