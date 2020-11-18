import React from "react";
import "../Login/Login.css";
import { TextField, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

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
            type="text"
          />
          <TextField
            required
            // onChange={handleTextChange}
            name="password"
            placeholder="Password"
            type="password"
            style={{ marginTop: 15 }}
          />
          <div className="buttons">
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              style={{ background: "#E84855", color: "#fbf7ef" }}
            >
              Login
            </Button>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              style={{ background: "#E84855", color: "#fbf7ef" }}
            >
              <Link to="/signUp">Signup</Link>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
