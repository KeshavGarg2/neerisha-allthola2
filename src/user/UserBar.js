import Login from "../user/Login";
import Logout from "../user/Logout";
import Register from "../user/Register";
import { useState } from "react";

export default function UserBar({ user, dispatch }) {
  const [username, setUsername] = useState("");
    // const username = "danny";
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}