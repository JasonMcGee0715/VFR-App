import React from "react";
import "../Login/Login.css";
import { TextField, Button, Container } from "@material-ui/core";

export default function Login() {
  return (
    <div className="body">
      <Container maxWidth="sm">
        <form className="login-form">
          <TextField
            autoFocus="true"
            required
            // onChange={handleTextChange}
            name="userName"
            placeholder="Username"
            // placeholder="Username"
            type="text"
          />
          <TextField
            required
            // onChange={handleTextChange}
            name="password"
            placeholder="Password"
            // placeholder="Password"
            type="password"
          />
          {/* <button className="button">Login</button> */}
          <div className="buttons">
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              style={{ background: "#E84855", color: "whitesmoke" }}
            >
              Login
            </Button>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              style={{ background: "#E84855", color: "whitesmoke" }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
