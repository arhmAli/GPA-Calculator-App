import { React, useState, useContext, createContext } from "react";
import { Link } from "react-router";
const InitialMsg = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState(0);
  function handleClick() {
    navigate("./main", { replace: true });
  }
  return (
    <>
      <h4>Enter The number of subjects you would like to calculate GPA of:</h4>
      <input
        type="number"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <Link to="/main">
        <button>Enter the App</button>
      </Link>
      {/* <Main btnVal={btn}/> */}
    </>
  );
};
const AppContext = createContext({});
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={this.state.value}>
      {children}
    </AppContext.Provider>
  );
};
export const useContexts = () => useContext(AppContext);

export default { InitialMsg };
export { AppContext, AppProvider };
const InitialMsg = () => {
  return (
    <>
      <div>
        <Link to="main"> Another one </Link>;
      </div>
    </>
  );
};
export default InitialMsg;
