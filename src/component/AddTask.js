import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/ToDo";

const AddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputValue));
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTask;
