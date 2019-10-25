const initialState = {
  name: "",
  email: "",
  street: "",
  city: "",
  state: "",
  vehicle: {
    model: "",
    brand: ""
  }
};

export default function CalculoReducer(state = initialState, action) {
  switch (action.type) {
    case "NEXT":
      console.log("No reducer NEXT: " + JSON.stringify(action.calculo));
      return Object.assign({}, state, action.calculo);
    case "PREVIOUS":
      console.log("No reducer PREVIOUS: " + JSON.stringify(action.calculo));
      return Object.assign({}, state, action.calculo);
    default:
      return state;
  }
}
