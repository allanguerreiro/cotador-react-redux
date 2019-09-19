export default function todos(state = [], action) {
  switch (action.type) {
    case "NEXT":
      console.log("No reducer NEXT: " + JSON.stringify(action.calculo));
      return [...state, Object.assign({}, action.calculo)];
    case "PREVIOUS":
      console.log("No reducer PREVIOUS: " + JSON.stringify(action.calculo));
      return [...state, Object.assign({}, action.calculo)];
    default:
      return state;
  }
}
