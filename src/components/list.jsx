import React from "react";

export const List = ({ userList = [] }) => {
  // const userList = ["loyus", "don", "ggwp"];
  return (
    <div>
      <ul>
        {userList.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
