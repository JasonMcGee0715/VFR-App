import React, { useState, useEffect } from "react";
import "../Login/Login.css";
import { TextField, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = useState([]);

  //
  //// Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.
  useEffect(() => {
    callBackendAPI()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch("/users");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    // props.userLogin(userName);
    // props.history.push("/");
    window.location.replace("/");
  };

  return (
    <div className="body">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            // autoFocus="true"
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
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                fontFamily: "IBM Plex Mono",
              }}
              // onClick={usersLog}
            >
              Login
            </Button>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                fontFamily: "IBM Plex Mono",
              }}
            >
              <Link to="/signUp">Signup</Link>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
