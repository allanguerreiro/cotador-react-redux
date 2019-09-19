import React from "react";
import * as CalculoActions from "../actions/CalculoActions";
import { connect } from "react-redux";
import StepTwo from "./StepTwo";

class StepOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };
  }

  next = () => {
    console.log("No StepOne name: " + this.state.name);
    console.log("No StepOne email: " + this.state.email);
    let calculo = {
      name: this.state.name,
      email: this.state.email,
      street: null,
      city: null,
      state: null,
      numtickets: 0,
      shirtsize: "XL"
    };

    this.props.next(calculo);
    console.log("Voltou aqui!");
  };

  render() {
    return (
      <div>
        <h1>Step One</h1>
        <p>
          <label for="name">Your Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </p>
        <p>
          <label for="email">Your Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </p>

        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculo: state.calculo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    next: calculo => dispatch(CalculoActions.next(calculo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepOne);
