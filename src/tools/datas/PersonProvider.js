import React, {Component, createContext} from "react";
import {personInitialState} from "./personInitialState";

export const PersonContext = createContext();
export default class PersonStore extends Component {
  constructor(props) {
    super(props);
    this.state = personInitialState;
  }

  deletePerson = (value) => {
    let newPersons = this.state.persons;
    delete newPersons[value];

    this.setState({
      persons: newPersons,
    });
  };

  addPerson = (nameValue, ageValue) => {
    let newPersons = this.state.persons;
    newPersons.push({name: nameValue, age: ageValue});

    this.setState({
      persons: newPersons,
    });
  };

  render() {
    return (
      <PersonContext.Provider
        value={{
          state: this.state,
          deletePerson: this.deletePerson,
          addPerson: this.addPerson,
        }}
      >
        {this.props.children}
      </PersonContext.Provider>
    );
  }
}
