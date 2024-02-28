import { useState, useContext } from "react";
import UserConetext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(UserConetext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        type="text"
        placeholder="userName"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <br />
      <br />
      <button className="mt-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
