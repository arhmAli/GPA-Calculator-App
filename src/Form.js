import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./form.css";
const Form = () => {
  const grades = [
    { value: "A", label: "A" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B", label: "B" },
    { value: "B-", label: "B-" },
    { value: "C+", label: "C+" },
    { value: "C", label: "C" },
    { value: "C-", label: "C-" },
    { value: "D+", label: "D+" },
    { value: "D", label: "D" },
    { value: "F", label: "F" }
  ];
  const [grade, setGrade] = useState([]);
  console.log(grade);
  return (
    <>
      <div className="pair-input">
        <Select className="select" options={grades} />
        <input
          className="input"
          type="number"
          value={grade}
          onInput={(e) => setGrade(e.target.value)}
        />
      </div>
      <button>Calculate</button>
    </>
  );
};
export default Form;
