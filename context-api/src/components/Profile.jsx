import { useContext } from "react";
import UserConetext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserConetext);
  if (!user)
    return (
      <div>
        <h1>Please login</h1>
      </div>
    );
  return (
    <div>
      <h1>UserName: {user.username}</h1>
      <h2>Password : {user.password}</h2>
    </div>
  );
}
