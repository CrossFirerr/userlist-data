import React, { useState } from "react";
import { Display } from "./display";
const initialState = "";
export const Form = ({ getNewUserName }) => {
  const [name, setName] = useState(initialState);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    getNewUserName(name);
    setName(initialState);
  };
  return (
    <div>
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input value={name} type="text" onChange={handleOnChange} />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};
