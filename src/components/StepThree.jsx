import React from "react";
import * as CalculoActions from "../actions/CalculoActions";
import { connect } from "react-redux";
import history from "../history";

class StepThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      model: "",
      brand: ""
    };

    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    console.log(
      "Estou no componentDidMount do StepThree" +
        JSON.stringify(this.props.calculo)
    );
    this.setState({
      model: this.props.calculo.vehicle.model,
      brand: this.props.calculo.vehicle.brand
    });
  }

  previous = () => {
    let calculo = {
      vehicle: { model: this.state.model, brand: this.state.brand }
    };

    this.props.previous(calculo);
    history.push("/two");
  };

  render() {
    return (
      <div>
        <h1>Step Three</h1>
        <p>
          <label htmlFor="model">Model:</label>
          <input
            id="model"
            name="model"
            type="text"
            value={this.state.model}
            onChange={e => this.setState({ model: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="brand">Brand:</label>
          <input
            id="brand"
            name="brand"
            type="text"
            value={this.state.brand}
            onChange={e => this.setState({ brand: e.target.value })}
          />
        </p>

        <button onClick={this.previous}>Previous</button>
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
    previous: calculo => dispatch(CalculoActions.previous(calculo))
  };
};

export default connect(
  getCalculo,
  setCalculo
)(StepThree);
