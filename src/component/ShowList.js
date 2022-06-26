import React from "react";
import { useSelector } from "react-redux/es/exports";
import { taskListSelector } from "../redux/slices/ToDo";

const ShowList = () => {
  const taskList = useSelector(taskListSelector);

  return <div>{taskList[0]}</div>;
};

export default ShowList;
