import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import axios from "axios";
import { SERVER_URL } from "./constants/globals";
import Accordion from "./components/Accordion";
import LineChart from "./chart/LineChart";
import Trade from "./components/Trade";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      porfolio: [],
      workingCap: null,
      symbol: 'GOOG'
    };
  }




  handleClick = e => {
    this.setState({ chartDisplayed: e.target.dataset.symbol });
  };

  render() {
    if (this.props.user) {
      return (
        <div>
          <ProgressBar workingCapital={110} portfolioTotal={90000} />
          <LineChart symbol={this.state.symbol} />
          <Trade symbol={this.state.symbol} />
          <h2>Buy some new stocks!</h2>
          <Accordion handleClick={this.handleClick} />
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}

export default Profile;
