import userContext from "./userContext";

const userProvider = ({ props }) => {
  const state = {
    name: "Shivam",
    role: "FE",
  };
  return <userContext.Provider value={state}>{props}</userContext.Provider>;
};

export default userProvider;
