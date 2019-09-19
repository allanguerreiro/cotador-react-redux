import React from "react";
import * as calculoActions from "../actions/calculoActions";
import { connect } from "react-redux";
import Previous from "./Previous";
import Next from "./Next";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

class Principal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false
    };
  }

  togglePrev = e => {
    let index = this.state.index - 1;
    let disabledPrev = index === 0;

    this.setState({
      index: index,
      disabledPrev: disabledPrev,
      disabledNext: false
    });
  };

  toggleNext = e => {
    let index = this.state.index + 1;
    let disabledNext = index === this.props.profiles.length - 1;

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false
    });
  };

  render() {
    const { index, disabledNext, disabledPrev } = this.state;
    return (
      <div>
        <div>
          <StepOne />
        </div>
        <br />
        <div>
          <Previous toggle={e => this.togglePrev(e)} active={disabledPrev} />
          <Next toggle={e => this.toggleNext(e)} active={disabledNext} />
        </div>
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
)(Principal);
