import React from "react";
import "../Login/Login.css";
import { TextField, Button, Container } from "@material-ui/core";

export default function Login() {
  return (
    <div className="body">
      <Container maxWidth="sm">
        <form className="login-form">
          <TextField
            required
            // onChange={handleTextChange}
            name="userName"
            label="Username"
            // placeholder="Username"
            type="text"
          />
          <TextField
            required
            // onChange={handleTextChange}
            name="password"
            label="Password"
            // placeholder="Password"
            type="password"
          />
          {/* <button className="button">Login</button> */}
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            style={{ background: "#E84855", color: "whitesmoke" }}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}
