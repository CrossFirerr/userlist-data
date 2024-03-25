import React, { useState } from "react";
import { Display } from "./display";
export const Form = ({ getNewUserName }) => {
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    getNewUserName(name);
  };
  return (
    <div>
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};
