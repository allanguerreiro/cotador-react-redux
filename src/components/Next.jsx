export const Next = props => {
  console.log("Action next: " + props);
  return (
    <button onClick={props.toggle} disabled={props.active}>
      Next
    </button>
  );
};
