import React from "react";
import "../Css/Toggle.css";

const Toggler = ({ toggleData, onChange }) => {
  return (
    <div className="toggle-containers">
      {toggleData.map((toggle, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={toggle.state}
              onChange={() => onChange(index)}
            />
            <label>{toggle.title}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Toggler;
