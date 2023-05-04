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
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
