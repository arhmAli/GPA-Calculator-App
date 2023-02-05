import { React, useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
export default function InitialMsg(n) {
  //let navigate = useNavigate();
  let [value, setValue] = useState(0);
  //function handleClick() {
  //;
  //}
  return (
    <>
      <h4>Enter The number of subjects you would like to calculate GPA of:</h4>
      <input
        type="number"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      {/* <Link to="/main">
        <button>Enter the App</button>
      </Link> */}
      <Main btnVal={value} />
    </>
  );
}
//   export function Val() {
//   let [updatedVal, setUpdatedVal] = useState(0);
//   console.log(updatedVal);
//   return updatedVal;
// }
