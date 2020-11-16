import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import { AppBar, Toolbar, Fade, Typography, Paper } from "@material-ui/core";
import App from "../../App";
// import { checkAuth } from "../../checkAuth";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   appBar: {
//     paddingLeft: 25,
//     paddingRight: 25,
//     padding: 5,
//   },
//   fadeIn: {
//     padding: 6,
//     paddingLeft: "5%",
//   },
// }));

export default function Header() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Hello</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
