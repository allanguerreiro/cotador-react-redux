import React from "react";
import * as calculoActions from "../actions/calculoActions";
import { connect } from "react-redux";

class StepTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      street: "",
      city: "",
      state: ""
    };
  }

  next = () => {
    console.log("No StepOne name: " + this.props.calculo.name);
    console.log("No StepOne street: " + this.state.street);
    console.log("No StepOne city: " + this.state.city);
    console.log("No StepOne state: " + this.state.state);

    let calculo = {
      name: this.props.calculo.name,
      email: this.props.calculo.email,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      numtickets: 0,
      shirtsize: "XL"
    };

    this.props.next(calculo);
  };

  previous = () => {
    let calculo = {
      name: this.props.calculo.name,
      email: this.props.calculo.email,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      numtickets: 0,
      shirtsize: "XL"
    };

    this.props.previous(calculo);
  };

  render() {
    return (
      <div>
        <h1>Step Two</h1>
        <p>
          <p>
            <label for="street">Your Street:</label>
            <input
              id="street"
              name="street"
              type="text"
              value={this.state.street}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </p>
        </p>
        <p>
          <label for="city">Your City:</label>
          <input
            id="city"
            name="city"
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </p>

        <p>
          <label for="state">Your State:</label>
          <input
            id="state"
            name="state"
            type="text"
            value={this.state.state}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </p>

        <button onClick={this.precious}>Previous</button>
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
    next: calculo => dispatch(calculoActions.next(calculo)),
    previous: calculo => dispatch(calculoActions.previous(calculo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepTwo);
