import React from "react";
import AddTask from "../component/AddTask";
import ShowList from "../component/ShowList";

const ToDoList = () => {
  return (
    <div>
      <AddTask />
      <ShowList />
    </div>
  );
};

export default ToDoList;
