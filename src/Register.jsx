import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
// import "./Login.css"

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, email, password };
    const users = JSON.parse(localStorage.getItem("login"));
    console.log("==>>>>>", users);
    let login = [...users, user];
    users && localStorage.setItem("login", JSON.stringify(login));
    // Redirect to Login page after registration
    // props.history.push('/');
  };

  return (
    <>
      <div 
        style={{
          border: "10px solid black",
          display: "flex",
          justifyContent: "space-evenly",
          padding:"120px"
        }}
      >
        <div
        >
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            /> <br /><br />
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            /> <br /><br />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            /> <br /><br />
            <Button variant="contained" sx={{paddingLeft:9,paddingRight:9}} type="submit">Register</Button>
            <p>
              Already have an account? <Link to="/">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};




