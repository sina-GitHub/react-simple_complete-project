import React, {useState, memo, useEffect} from "react";
import {createUseStyles} from "react-jss";

import {PersonContext} from "../datas/PersonProvider";

const AddPersons = () => {
  const classes = jss();

  const [inputValue, setInputValue] = useState({name: "", age: ""});

  useEffect(() => {
    console.log("AddPerson is rendering...");
  });

  return (
    <div className={classes["add-persons"]}>
      <input
        value={inputValue.name}
        onChange={(event) => {
          setInputValue({...inputValue, name: event.target.value});
        }}
        placeholder="add name"
      />
      <input
        value={inputValue.age}
        onChange={(event) => {
          setInputValue({...inputValue, age: event.target.value});
        }}
        placeholder="add age"
      />
      <PersonContext.Consumer>
        {(ctx) => {
          return (
            <button
              onClick={() => {
                ctx.addPerson(inputValue.name, inputValue.age);
                setInputValue({name: "", age: ""});
              }}
            >
              Add
            </button>
          );
        }}
      </PersonContext.Consumer>
    </div>
  );
};

const jss = createUseStyles({
  "add-persons": {
    margin: "50px 100px",
    padding: "50px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& input": {
      margin: "0 5px",
      height: "30px",
    },
  },
});

export default memo(AddPersons);
