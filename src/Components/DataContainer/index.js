import React, { Component } from "react";
import data from "../../data";
import "./style.css";

import PersonInfo from "../PersonInfo";
import NavButtons from "../NavButtons";

export default class DataContainer extends Component {
  constructor() {
    super();

    this.state = {
      people: data,
      index: 0,
    };
  }

  prevButton = () => {
    const { index } = this.state;
    if (index === 0) {
    } else {
      this.setState({ index: index - 1 });
    }
  };

  nextButton = () => {
    const { index, people } = this.state;
    if (index === people.length - 1) {
    } else {
      this.setState({ index: index + 1 });
    }
  };

  render() {
    const { index, people } = this.state;
    return (
      <div>
        <div className="container">
          <PersonInfo person={people[index]} peopleLen={people.length} />
        </div>
        <NavButtons nextFn={this.nextButton} prevFn={this.prevButton} />
      </div>
    );
  }
}
