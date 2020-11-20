import React, { useState, useEffect, useRef } from "react";
import "../Search/Search.css";
import {
  TextField,
  Button,
  // Container,
  // Typography,
  // List,
  // Card,
  // CardMedia,
} from "@material-ui/core";

export default function Search() {
  const [businesses, setBusinesses] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [dataPool, setDataPool] = useState([]);

  //
  //// Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.
  useEffect(() => {
    callBackendAPI()
      .then((res) => setBusinesses(res))
      .catch((err) => console.log(err));
  });

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch("/businesses");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  //
  //// Capitalize the first letter of the string so it matches with the Database
  const capitalize = (word) => {
    if (typeof word !== "string") return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  //
  //// Setting state to whats entered in input boxes.
  const handleTextChange = (evt) => {
    if (evt.target.name === "name") {
      const input = evt.target.value;
      const cappedInput = capitalize(input);
      setNameInput(cappedInput);
    }
    if (evt.target.name === "zip") {
      setZipInput(evt.target.value);
      const input = evt.target.value;
      const cappedInput = capitalize(input);
      setZipInput(cappedInput);
    }
    if (evt.target.name === "city") {
      setCityInput(evt.target.value);
      const input = evt.target.value;
      const cappedInput = capitalize(input);
      setCityInput(cappedInput);
    }
  };

  //
  //// submit functions
  const handleNameSearch = (evt) => {
    evt.preventDefault();
    const found = businesses.filter((business) => business.name === nameInput);
    setDataPool(found);
  };
  const handleZipSearch = (evt) => {
    evt.preventDefault();
    const found = businesses.filter((business) => business.zip === zipInput);
    setDataPool(found);
  };
  const handleCitySearch = (evt) => {
    evt.preventDefault();
    const found = businesses.filter((business) => business.city === cityInput);
    setDataPool(found);
  };

  let textInput1 = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);

  return (
    <React.Fragment>
      <div className="mainContainer">
        <span
          style={{ textAlign: "center", fontSize: "26px", color: "#141313" }}
        >
          Search for Businesses
        </span>
        <div className="searchContainer">
          <form className="inputAndButton" onSubmit={handleNameSearch}>
            <TextField
              className="BusinessInput"
              onChange={handleTextChange}
              inputRef={textInput1}
              name="name"
              placeholder="Business Name"
              type="text"
              style={{ marginTop: 20 }}
            />
            <Button
              type="submit"
              className="searchButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
              }}
              onClick={() => {
                setTimeout(() => {
                  textInput1.current.value = "";
                  textInput2.current.value = "";
                  textInput3.current.value = "";
                }, 100);
              }}
            >
              Search by Name
            </Button>
          </form>
          <form className="inputAndButton" onSubmit={handleZipSearch}>
            <TextField
              className="ZipInput"
              onChange={handleTextChange}
              inputRef={textInput2}
              name="zip"
              placeholder="Zip Code"
              type="text"
              style={{ marginTop: 20 }}
            />
            <Button
              type="submit"
              className="searchButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
              }}
              onClick={() => {
                setTimeout(() => {
                  textInput1.current.value = "";
                  textInput2.current.value = "";
                  textInput3.current.value = "";
                }, 100);
              }}
            >
              Search by Zip
            </Button>
          </form>
          <form className="inputAndButton" onSubmit={handleCitySearch}>
            <TextField
              className="CityInput"
              onChange={handleTextChange}
              inputRef={textInput3}
              name="city"
              placeholder="City"
              type="text"
              style={{ marginTop: 20 }}
            />
            <Button
              type="submit"
              className="searchButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
              }}
              onClick={() => {
                setTimeout(() => {
                  textInput1.current.value = "";
                  textInput2.current.value = "";
                  textInput3.current.value = "";
                }, 100);
              }}
            >
              Search by City
            </Button>
          </form>
        </div>
        <div className="showBusinessContainer">
          {dataPool.map((business, idx) => (
            <h2 key={idx}>{business.name}</h2>
          ))}
        </div>
      </div>
    </React.Fragment>

    // <div>
    //   {businesses.map((business, idx) => (
    //     <h2 key={idx}>{business.name}</h2>
    //   ))}
    // </div>
  );
}
