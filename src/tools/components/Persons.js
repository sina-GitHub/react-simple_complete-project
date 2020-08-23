import React, {useEffect} from "react";

import {PersonContext} from "../datas/PersonProvider";
import PersonComponent from "./Person";
import {createUseStyles} from "react-jss";

export default React.memo(() => {
  const classes = jss();

  useEffect(() => {
    console.log("Persons is Rendering...");
  });

  return (
    <div className={classes.persons}>
      <PersonContext.Consumer>
        {(ctx) =>
          ctx.state.persons.map((item, index) => {
            return (
              <PersonComponent
                key={index}
                name={item.name}
                age={item.age}
                del={() => ctx.deletePerson(index)}
              />
            );
          })
        }
      </PersonContext.Consumer>
    </div>
  );
});

const jss = createUseStyles({
  persons: {
    position: "relative",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "2px solid #333",
    backgroundColor: "#333",
    borderRadius: "3px",
    fontSize: "30px",
    height: "auto",
    marginBottom: "450px",
  },
});
