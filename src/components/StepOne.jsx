import React from "react";
import * as CalculoActions from "../actions/CalculoActions";
import { connect } from "react-redux";
import history from "../history";

class StepOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };

    this.next = this.next.bind(this);
  }

  componentDidMount() {
    console.log(
      "Estou no componentDidMount do StepOne" +
        JSON.stringify(this.props.calculo)
    );
    this.setState({
      name: this.props.calculo.name,
      email: this.props.calculo.email
    });
  }

  next = () => {
    let calculo = {
      name: this.state.name,
      email: this.state.email
    };

    this.props.next(calculo);
    history.push("/two");
  };

  render() {
    return (
      <div>
        <h1>Step One</h1>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
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

const getCalculo = calculo => {
  return {
    calculo: calculo.CalculoReducer
  };
};

const setCalculo = dispatch => {
  return {
    next: calculo => dispatch(CalculoActions.next(calculo))
  };
};

export default connect(
  getCalculo,
  setCalculo
)(StepOne);
