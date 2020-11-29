import React, { useState, useRef } from "react";
import "../SignUp/SignUp.css";
import { TextField, Button, Container } from "@material-ui/core";

export default function SignUp() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [county, setCounty] = useState(null);
  const [zip, setZip] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleTextChange = (evt) => {
    if (evt.target.name === "firstName") {
      setFirstName(evt.target.value);
    }
    if (evt.target.name === "lastName") {
      setLastName(evt.target.value);
    }
    if (evt.target.name === "city") {
      setCity(evt.target.value);
    }
    if (evt.target.name === "state") {
      setState(evt.target.value);
    }
    if (evt.target.name === "county") {
      setCounty(evt.target.value);
    }
    if (evt.target.name === "zip") {
      setZip(evt.target.value);
    }
    if (evt.target.name === "phone") {
      setPhone(evt.target.value);
    }
    if (evt.target.name === "email") {
      setEmail(evt.target.value);
    }
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    }
    if (evt.target.name === "password") {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    (async () => {
      const rawResponse = await fetch("/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          city: city,
          state: state,
          county: county,
          zip: zip,
          phone: phone,
          email: email,
          userName: userName,
          password: password,
        }),
      });
      const content = await rawResponse.json();
      console.log("Response", content);
    })();
  };

  // useEffect(() => {
  //   // console.log(Clear);
  //   console.log(newUser);
  // });

  let textInput1 = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);
  let textInput4 = useRef(null);
  let textInput5 = useRef(null);
  let textInput6 = useRef(null);
  let textInput7 = useRef(null);
  let textInput8 = useRef(null);
  let textInput9 = useRef(null);
  let textInput10 = useRef(null);

  return (
    <div>
      <Container maxWidth="xs" className="signUpContainer">
        <form className="signUpForm" onSubmit={handleSubmit}>
          <TextField
            className="signUpInput"
            // autoFocus= "true"
            required
            onChange={handleTextChange}
            inputRef={textInput1}
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput2}
            name="lastName"
            placeholder="Last Name"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput3}
            name="city"
            placeholder="City"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput4}
            name="state"
            placeholder="State"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput5}
            name="county"
            placeholder="County"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput6}
            name="zip"
            placeholder="Zip"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput7}
            name="phone"
            placeholder="Phone"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput8}
            name="email"
            placeholder="Email"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput9}
            name="userName"
            placeholder="User Name"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="signUpInput"
            required
            onChange={handleTextChange}
            inputRef={textInput10}
            name="password"
            placeholder="Password"
            type="password"
            style={{ marginTop: 15 }}
          />
          <div className="newUserButton">
            <Button
              type="submit"
              className="createUser-button"
              variant="contained"
              style={{
                background: "#E84855",
                color: "whitesmoke",
                fontFamily: "IBM Plex Mono",
              }}
              onClick={() => {
                setTimeout(() => {
                  textInput1.current.value = "";
                  textInput2.current.value = "";
                  textInput3.current.value = "";
                  textInput4.current.value = "";
                  textInput5.current.value = "";
                  textInput6.current.value = "";
                  textInput7.current.value = "";
                  textInput8.current.value = "";
                  textInput9.current.value = "";
                  textInput10.current.value = "";
                }, 100);
              }}
            >
              Create New User
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
