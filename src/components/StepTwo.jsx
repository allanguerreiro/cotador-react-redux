import React from "react";
import * as CalculoActions from "../actions/CalculoActions";
import { connect } from "react-redux";
import history from "../history";

class StepTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      street: "",
      city: "",
      state: ""
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    console.log(
      "Estou no componentDidMount do StepTwo" +
        JSON.stringify(this.props.calculo)
    );
    this.setState({
      street: this.props.calculo.street,
      city: this.props.calculo.city,
      state: this.props.calculo.state
    });
  }

  next = () => {
    console.log("Teste" + JSON.stringify(this.props.calculo));

    let calculo = {
      street: this.state.street,
      city: this.state.city,
      state: this.state.state
    };

    this.props.next(calculo);
    history.push("/three");
  };

  previous = () => {
    let calculo = {
      street: this.state.street,
      city: this.state.city,
      state: this.state.state
    };

    this.props.previous(calculo);
    history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Step Two</h1>
        <p>
          <label htmlFor="street">Street:</label>
          <input
            id="street"
            name="street"
            type="text"
            value={this.state.street}
            onChange={e => this.setState({ street: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
        </p>

        <p>
          <label htmlFor="state">State:</label>
          <input
            id="state"
            name="state"
            type="text"
            value={this.state.state}
            onChange={e => this.setState({ state: e.target.value })}
          />
        </p>

        <button onClick={this.previous}>Previous</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

const getCalculo = calculo => {
  return {
    calculo: calculo.CalculoReducer
  };
};

const setCalculo = dispatch => {
  return {
    next: calculo => dispatch(CalculoActions.next(calculo)),
    previous: calculo => dispatch(CalculoActions.previous(calculo))
  };
};

export default connect(
  getCalculo,
  setCalculo
)(StepTwo);
