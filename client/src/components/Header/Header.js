import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import { checkAuth } from "../../checkAuth";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import { AppBar, Toolbar, Fade, Typography, Paper } from "@material-ui/core";
// import App from "../../App";
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
      <div className="header">
        <h1 className="title">Weeble.</h1>
        <nav>
          <ul className="list">
            <li>
              <Link to="/">Getting Started</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            {checkAuth() && (
              <li>
                <Link to="/newbusiness">Add Business</Link>
              </li>
            )}
            {checkAuth() ? (
              <li
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace("/login");
                }}
              >
                Logout
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
