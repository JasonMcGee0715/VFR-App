import React from "react";
import "../GettingStarted/GettingStarted.css";
import { Link } from "react-router-dom";
import {
  // Typography,
  // Box,
  // Grid,
  // Card,
  // CardMedia,
  // Paper,
  // Container,
  // List,
  // ListItem,
  // TextField,
  Button,
  // CardActionArea,
} from "@material-ui/core";
// import Image from "material-ui-image";

export default function GettingStarted() {
  return (
    <div className="container">
      <div className="imgContainer"></div>

      <div className="intro">
        <span>
          Every Veteran or First Responder has gone through the interactions of
          trying to find out if an establishment offers discounts to you.
          Sometimes these efforts can be a real pain if the person on the other
          side of the counter has to start searching for answers. Some people
          would rather not ask, because that's not their personality.
        </span>
        <br />
        <br />
        <span>
          Introducing
          <span style={{ color: "#49a4d1", fontWeight: "bold" }}>
            {" "}
            Weeble!{" "}
          </span>
          An app created to help bridge the gap between Veterans / First
          Responders and their potential discounts.
        </span>
        <br />
        <br />
        <br />
        <span>It's as easy as 1, 2, 3:</span>
        <ul>
          <li>Login or Signup to the app with basic information.</li>
          <br />
          <li>
            Search for known discounts from places near you by name, city, and
            zip.
          </li>
          <br />
          <li>
            If you happen to run across a place that has discounts, but does not
            show up...Add it!
          </li>
        </ul>
        <br />
        <span>
          Lets look after one another and help each other save. You never know
          what someone is going through...a few extra bucks can make a
          difference.
        </span>
        <div className="intro-buttons">
          <Button
            type="submit"
            className="intro-button"
            variant="contained"
            style={{ background: "#E84855", color: "#fbf7ef" }}
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            type="submit"
            className="intro-button"
            variant="contained"
            style={{ background: "#E84855", color: "#fbf7ef" }}
          >
            <Link to="/signUp">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
    // <Container className="body" mx="auto">
    //   <Grid container spacing={5}>
    //     <Grid item xs={6}>
    //       <Box
    //         p={4}
    //         display="flex"
    //         flexDirection="column"
    //         className="imgBox"
    //       ></Box>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Box m={1} display="flex" flexDirection="column" className="summary">
    //         <Typography>
    //           Every Veteran or First Responder has gone through the interaction
    //           of trying to find out if an establishment offers discounts to you.
    //           Sometimes these efforts can be a real pain if the person on the
    //           other side of the counter has to start searching for answers.
    //         </Typography>
    //         <br />
    //         <Typography>
    //           Intoducing Weeble! An app created to help bridge the gap between
    //           Veterans and First Responders and their potential discounts.
    //         </Typography>
    //         <br />
    //         <Typography>
    //           Its as easy as 1, 2, 3:
    //           <List>
    //             <ListItem>
    //               1. Login or Signup to the app with basic information.
    //             </ListItem>
    //             <ListItem>
    //               2. Search for known discounts from places near you by name,
    //               city, and zip.
    //             </ListItem>
    //             <ListItem>
    //               3. If you happen to run across a place that has discounts, but
    //               does not show up...Add it!
    //             </ListItem>
    //           </List>
    //         </Typography>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}
