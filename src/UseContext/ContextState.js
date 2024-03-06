import createNewContext from "./ContextApi";

const ContextState = (props) => {
  const state = {
    Name: "Rajeev",
    Location: "dhanbad",
  };
  return (
    <createNewContext.Provider value={state}>
      {props.children}
    </createNewContext.Provider>
  );
};
export default ContextState;
