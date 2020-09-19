import React, { Component } from "react";
import data from "../../data";
import './style.css'

import PersonInfo from '../PersonInfo'


export default class DataContainer extends Component {
  constructor() {
    super();

    this.state = {
      people: data,
      index: 0
    };
  }

  render() {
      return (
          <div className="container">
              <PersonInfo person={this.state.people[this.state.index]} />
          </div>
      )
  }
}
