export const Previous = props => {
  console.log("Action next: " + props);
  return (
    <button onClick={props.toggle} disabled={props.active}>
      Previous
    </button>
  );
};
