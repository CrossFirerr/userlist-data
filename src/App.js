import { useState } from "react";
import "./App.css";
import { Form } from "./components/form";
import { List } from "./components/list";
function App() {
  const [userList, setUserList] = useState([]);
  const getNewUserName = (name) => {
    setUserList([...userList, name]);
  };
  return (
    <div className="">
      <h1>User list</h1>
      <hr></hr>
      <div>
        <Form getNewUserName={getNewUserName} />
      </div>
      <List userList={userList} />
    </div>
  );
}

export default App;
