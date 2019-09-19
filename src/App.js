import React from "react";
import StepOne from "./components/StepOne";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <StepOne />
        </div>
      </Provider>
    );
  }
}

export default App;
