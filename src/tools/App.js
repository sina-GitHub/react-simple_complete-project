import React, {lazy, Suspense} from "react";
import {createUseStyles} from "react-jss";

import PersonProvider from "./datas/PersonProvider";
const Persons = lazy(() => import("./components/Persons"));
const AddPersons = lazy(() => import("./components/AddPersons"));

export default function App() {
  const classes = jss();

  return (
    <div className={classes.reactApp}>
      <PersonProvider>
        <Suspense
          fallback={
            <div style={{fontSize: "100px", color: "#333"}}>Loading...</div>
          }
        >
          <AddPersons />
          <Persons />
        </Suspense>
      </PersonProvider>
    </div>
  );
}

const jss = createUseStyles({
  reactApp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
