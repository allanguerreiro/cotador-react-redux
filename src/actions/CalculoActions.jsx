export const next = calculo => {
  console.log("Action next: " + JSON.stringify(calculo));
  return {
    type: "NEXT",
    calculo
  };
};

export const previous = calculo => {
  console.log("Action previous: " + JSON.stringify(calculo));
  return {
    type: "PREVIOUS",
    calculo
  };
};
