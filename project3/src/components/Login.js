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





// import React, { useState } from "react";
// import axios from "axios";

// const BASE_URL = "https://example.com/api"; // replace with your API URL

// const Login = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [signUpUsername, setSignUpUsername] = useState("");
//   const [signUpPassword, setSignUpPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${BASE_URL}/login`, {
//         email: username,
//         password,
//       });
//       const { sessionToken } = response.data;
//       axios.defaults.headers.common["Authorization"] = `Bearer ${sessionToken}`; // set the default authorization header for subsequent requests
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to login");
//     }
//   };

//   const handleLogout = () => {
//     axios.defaults.headers.common["Authorization"] = null; // remove the authorization header
//     setIsLoggedIn(false);
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSignUp = async () => {
//     try {
//       await axios.post(`${BASE_URL}/signup`, {
//         email: signUpUsername,
//         password: signUpPassword,
//       });
//       alert("Sign up successful! Please log in.");
//       setSignUpUsername("");
//       setSignUpPassword("");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to sign up");
//     }
//   };

//   const handleSignUpUsernameChange = (e) => {
//     setSignUpUsername(e.target.value);
//   };

//   const handleSignUpPasswordChange = (e) => {
//     setSignUpPassword(e.target.value);
//   };

//   return (
//     <div className="loginForm">
//       {isLoggedIn ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <div className="loginContrast">
//           <h2>Login</h2>
//           <label className="label" htmlFor="email">
//             <strong>Email: &nbsp;</strong>
//             <input
//               type="text"
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </label>
//           <br />
//           <label className="label" htmlFor="password">
//             <strong>Password: &nbsp;</strong>
//             <input
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <br />
//           <button id="btn" onClick={handleLogin}>
//             Login
//           </button>
//           <br />
//           <h2>Sign Up</h2>
//           <label className="label" htmlFor="signUpEmail">
//             <strong>Email: &nbsp;</strong>
//             <input
//               type="text"
//               value={signUpUsername}
//               onChange={handleSignUpUsernameChange}
//             />
//           </label>
//           <br />
//           <label className="label" htmlFor="signUpPassword">
//             <strong>Password: &nbsp;</strong>
//             <input
//               type="password"
//               value={signUpPassword}
//               onChange={handleSignUpPasswordChange}
//             />
//           </label>
//           <br />
//           <button id="btn" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//       )}
//     </div>