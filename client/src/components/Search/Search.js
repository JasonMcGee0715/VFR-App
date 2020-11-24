import React, { useState, useEffect, useRef } from "react";
import Map from "../Map";
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
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Geocode from "react-geocode";

export default function Search() {
  const [businesses, setBusinesses] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [dataPool, setDataPool] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  //
  //// Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.
  useEffect(() => {
    callBackendAPI()
      .then((res) => setBusinesses(res))
      .catch((err) => console.log(err));
  }, []);

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
  // const capitalize = (word) => {
  //   if (typeof word !== "string") return "";
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // };

  //
  //
  //// Setting state to whats entered in input boxes.  Commented out code is what was used when it wasn't being developed to deliver realtime results. Submit Buttons were used(later in code) to filter through businesses and match to each respective state.  Problem was regex was needed to get rid of needing to type in exact names.  I went the direction of realtime results which solved that problem as well.  Plus its just cooler ;)
  const handleTextChange = (evt) => {
    if (evt.target.name === "name") {
      const input = evt.target.value;
      const found = businesses.filter((business) =>
        business.name.toLowerCase().includes(input.toLowerCase())
      );
      setDataPool(found);
      // const input = evt.target.value;
      // const cappedInput = capitalize(input);
      // setNameInput(cappedInput);
    }
    if (evt.target.name === "zip") {
      const input = evt.target.value;
      const found = businesses.filter((business) =>
        business.zip.toLowerCase().includes(input.toLowerCase())
      );
      setDataPool(found);
      // const input = evt.target.value;
      // const cappedInput = capitalize(input);
      // setZipInput(cappedInput);
    }
    if (evt.target.name === "city") {
      const input = evt.target.value;
      const found = businesses.filter((business) =>
        business.city.toLowerCase().includes(input.toLowerCase())
      );
      setDataPool(found);
      // const input = evt.target.value;
      // const cappedInput = capitalize(input);
      // setCityInput(cappedInput);
    }
  };

  //
  //// submit functions
  const handleNameSearch = (evt) => {
    evt.preventDefault();
    const found = businesses.filter((business) =>
      business.name.toLowerCase().includes(nameInput.toLowerCase())
    );
    setDataPool(found);

    // const found = businesses.filter((business) => business.name === nameInput);
    // setDataPool(found);
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

  //
  //// Code used to make table function with pages and rows
  // const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    // event.preventDefault();
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    // event.preventDefault();
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleMarker = (idx) => {
    console.log(idx);
    const business = dataPool[Number(idx)];
    setSelectedBusiness(business);
    console.log(selectedBusiness);

    const markerAddress = business.address;
    setSelectedAddress(markerAddress);
    console.log(selectedAddress);
  };

  // Map GeoCoding
  const GOOGLE_MAPS_API_KEY = "AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k";
  Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
  Geocode.fromAddress(selectedAddress).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      setLat(lat);
      setLng(lng);
      // console.log(response);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <div>
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
              autoComplete
              onChange={handleTextChange}
              inputRef={textInput1}
              name="name"
              placeholder="Business Name"
              type="text"
              style={{ marginTop: 20 }}
            />
            {/* <Button
              type="submit"
              className="searchButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
                width: "65%",
                left: "16%",
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
            </Button> */}
          </form>
          <form className="inputAndButton" onSubmit={handleZipSearch}>
            <TextField
              className="ZipInput"
              autoComplete
              onChange={handleTextChange}
              inputRef={textInput2}
              name="zip"
              placeholder="Zip Code"
              type="text"
              style={{ marginTop: 20 }}
            />
            {/* <Button
              type="submit"
              className="searchButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
                width: "65%",
                left: "16%",
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
            </Button> */}
          </form>
          <form className="inputAndButton" onSubmit={handleCitySearch}>
            <TextField
              className="CityInput"
              autoComplete
              onChange={handleTextChange}
              inputRef={textInput3}
              name="city"
              placeholder="City"
              type="text"
              style={{ marginTop: 20 }}
            />
            {/* <Button
              type="submit"
              className="searchButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
                width: "65%",
                left: "16%",
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
            </Button> */}
          </form>
          <div>
            <Button
              className="resetButton"
              variant="contained"
              style={{
                background: "#E84855",
                color: "#fbf7ef",
                marginTop: "15px",
                width: "65%",
                left: "16%",
              }}
              onClick={() => {
                setTimeout(() => {
                  textInput1.current.value = "";
                  textInput2.current.value = "";
                  textInput3.current.value = "";
                }, 100);
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="showBusinessAndMap">
          <div className="showBusiness">
            <Paper>
              <TableContainer style={{ height: 470 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Address</TableCell>
                      <TableCell align="left">City</TableCell>
                      <TableCell align="left">State</TableCell>
                      <TableCell align="left">Zip</TableCell>
                      <TableCell align="left">Chain</TableCell>
                      <TableCell align="left">Military Discount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataPool
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((business, idx) => {
                        return (
                          <TableRow
                            key={idx}
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            onClick={(index) => handleMarker(idx, index)}

                            // key={row.code}
                          >
                            <TableCell align="left">{business.name}</TableCell>
                            <TableCell align="left">
                              {business.address}
                            </TableCell>
                            <TableCell align="left">{business.city}</TableCell>
                            <TableCell align="left">{business.state}</TableCell>
                            <TableCell align="left">{business.zip}</TableCell>
                            <TableCell align="left">{business.chain}</TableCell>
                            <TableCell align="left">
                              {business.militaryDiscount}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={dataPool.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
          <div className="showMap">
            <Map lat={lat} lng={lng} />
          </div>
        </div>
      </div>
    </div>
  );
}
