import React from "react";
import {createUseStyles} from "react-jss";

export default (props) => {
  const classes = jss();

  return (
    <div className={classes.person}>
      <span className={classes["person-delete"]} onClick={props.del}>
        <p>Delete</p>
      </span>

      <div className={classes["person-container"]}>
        <span className={classes["person-name"]}>{props.name}</span>
        <span className={classes["person-age"]}>{props.age}</span>
      </div>
    </div>
  );
};

const jss = createUseStyles({
  person: {
    position: "relative",
    color: "#fff",
  },
  "person-container": {
    position: "relative",
    left: "-80px",
  },
  "person-name": {
    display: "inline-block !important",
    paddingBottom: "40px",
    margin: "0 5px",
  },
  "person-age": {
    display: "inline-block !important",
    paddingBottom: "40px",
    margin: "0 5px",
  },
  "person-delete": {
    display: "flex",
    width: "200px",
    position: "relative",
    left: "150px",
    top: "40px",
    backgroundColor: "rgba(184, 38, 38, 0.698)",
    cursor: "pointer",
    "& p": {
      padding: "5px",
      margin: "auto",
    },
    "&:hover": {
      backgroundColor: "#fff",
      "& p": {
        color: "rgba(200, 38, 38, 0.898)",
      },
    },
  },
});
