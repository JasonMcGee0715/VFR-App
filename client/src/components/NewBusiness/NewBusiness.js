import React, { useState, useRef } from "react";
import "../NewBusiness/NewBusiness.css";
import { TextField, Button, Container } from "@material-ui/core";

export default function NewBusiness() {
  return (
    <div>
      <Container maxWidth="xs" className="newBusinessContainer">
        <form className="newBusinessForm" onSubmit={handleSubmit}>
          <TextField
            className="newBusinessInput"
            // autoFocus= "true"
            required
            onChange={handleTextChange}
            inputRef={textInput1}
            name="name"
            placeholder="Business Name"
            type="text"
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
          <TextField
            className="newBusinessInput"
            required
            onChange={handleTextChange}
            inputRef={textInput7}
            name="militaryDiscount"
            placeholder="What is their Discount?"
            type="text"
            style={{ marginTop: 15 }}
          />

          {/* <div className="newUserButton">
            <Button
              type="submit"
              className="createUser-button"
              variant="contained"
              style={{ background: "#E84855", color: "whitesmoke" }}
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
          </div> */}
        </form>
      </Container>
    </div>
  );
}
