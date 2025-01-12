import React from "react";
import "../Css/dropDown.css";

const DropDownCurrency = ({ currencies, setCurrency, currency, title }) => {
  return (
    <div className="drop-down-container">
      <label htmlFor={title}>{title}:</label>
      <div className="drop-down">
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="" disabled>
            Select a currency
          </option>
          {Array.isArray(currencies) &&
            currencies.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default DropDownCurrency;
