import React, { useState, useRef } from "react";
import "../NewBusiness/NewBusiness.css";
import { TextField, Button, Container, Typography } from "@material-ui/core";

export default function NewBusiness() {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [chain, setChain] = useState(null);
  const [militaryDiscount, setMilitaryDiscount] = useState(null);
  //   const [form, setForm] = useState({
  //     firstName: '',
  //     lastName: '',
  //     city: '',
  //     state: '',
  //     zip: '',
  //     county: '',
  //     phone: '',
  //   })

  //   const handleTextChange = (evt) => {
  //     const newState = form;
  //     newState[evt.target.name] = evt.target.value;
  //     setForm(newState);
  //   };

  const newBusiness = {
    firstName: name,
    lastName: address,
    city: city,
    state: state,
    zip: zip,
    county: chain,
    phone: militaryDiscount,
  };

  const handleTextChange = (evt) => {
    if (evt.target.name === "name") {
      setName(evt.target.value);
    }
    if (evt.target.name === "address") {
      setAddress(evt.target.value);
    }
    if (evt.target.name === "city") {
      setCity(evt.target.value);
    }
    if (evt.target.name === "state") {
      setState(evt.target.value);
    }
    if (evt.target.name === "zip") {
      setZip(evt.target.value);
    }
    if (evt.target.name === "chain") {
      setChain(evt.target.value);
    }
    if (evt.target.name === "militaryDiscount") {
      setMilitaryDiscount(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(newBusiness);
  };

  let textInput1 = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);
  let textInput4 = useRef(null);
  let textInput5 = useRef(null);
  let textInput6 = useRef(null);
  let textInput7 = useRef(null);

  return (
    <div>
      <Container maxWidth="xs" className="newBusinessContainer">
        <form className="newBusinessForm" onSubmit={handleSubmit}>
          <Typography style={{ marginTop: 15 }}>
            Provide some basic info for our records...
          </Typography>
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput1}
            name="name"
            placeholder="Business Name"
            type="text"
            style={{ marginTop: 20 }}
          />
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput2}
            name="address"
            placeholder="Address"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput3}
            name="city"
            placeholder="City"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput4}
            name="state"
            placeholder="State"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput5}
            name="zip"
            placeholder="Zip"
            type="text"
            style={{ marginTop: 15 }}
          />
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput6}
            name="chain"
            placeholder="Is this business a chain?"
            type="text"
            style={{ marginTop: 15 }}
          />
          <Typography style={{ marginTop: 20 }}>
            And now, for the important part...
          </Typography>
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput7}
            name="militaryDiscount"
            placeholder="What's their Discount?"
            type="text"
            style={{ marginTop: 20 }}
          />
          <div className="newBusinessButton">
            <Button
              type="submit"
              className="createBusiness-button"
              variant="contained"
              style={{ background: "#E84855", color: "#fbf7ef" }}
              onClick={() => {
                setTimeout(() => {
                  textInput1.current.value = "";
                  textInput2.current.value = "";
                  textInput3.current.value = "";
                  textInput4.current.value = "";
                  textInput5.current.value = "";
                  textInput6.current.value = "";
                  textInput7.current.value = "";
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
