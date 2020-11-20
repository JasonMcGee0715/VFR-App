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
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

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

  //
  //// Code used to make table function with pages and rows
  // const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
        <div className="showBusinessAndMap">
          <div className="showBusiness">
            <Paper>
              <TableContainer>
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
                      .map((business) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
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
          <div className="showMap"></div>
        </div>
      </div>
    </div>
  );
}
