import React, { useState } from "react";




export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // Authenticate the user here. For simplicity, we'll just check if the username and password match.
    if (username === "myusername" && password === "mypassword") {
      setIsLoggedIn(true);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="loginForm">
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div className="loginContrast">
          <label className="label" for="email">
            <strong>Email: &nbsp;</strong>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label><br></br>
          <label className="label" for="password">
            <strong>Password: &nbsp;</strong>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label><br></br>
          <button id="btn" onClick={handleLogin}>Login</button><br></br>
          <button id="btn">Create an account</button>
        </div>
      )}
    </div>
  );
}
