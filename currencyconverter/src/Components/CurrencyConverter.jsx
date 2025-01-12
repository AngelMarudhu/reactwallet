import React, { useEffect, useState, useRef } from "react";
import DropDownCurrency from "./DropDownCurrency";
import "../Css/currency.css";
import { IoMdSwap } from "react-icons/io";
import { IoSwapVertical } from "react-icons/io5";

const API_CURRENCY = "https://api.frankfurter.app/currencies";
// const API_CURRENCY_CONVERTER = "https://api.frankfurter.app/latest?amount=200&from=INR&to=USD"

const CurrencyConverter = () => {
  /// first we need to store all the currencies in a state
  const [currencies, setCurrencies] = useState([]);
  /// second we need to store the amount
  const [amount, setAmount] = useState(0);
  /// third we need to store the from currency
  const [fromCurrency, setFromCurrency] = useState("USD");
  /// fourth we need to store the to currency
  const [toCurrency, setToCurrency] = useState("IND");
  /// fifth we need to store the converted amount
  const [convertedAmount, setConvertedAmount] = useState(1);

  const fetchCurrencies = async () => {
    const response = await fetch(API_CURRENCY);
    const data = await response.json();
    setCurrencies(Object.keys(data));
  };

  //   console.log(fromCurrency, toCurrency);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const currencyConverting = async () => {
    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await response.json();
      setConvertedAmount(data.rates[toCurrency]);
    } catch (error) {
      console.log(error);
    }
  };

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div>
      <h2 style={{ marginTop: "10px" }}>Currency Converter</h2>

      <div className="currency-converter">
        <div>
          <DropDownCurrency
            currencies={currencies}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            title="From"
          />
        </div>
        <div className="swap-button">
          <button
            onClick={swapCurrency}
            style={{ padding: "6px", cursor: "pointer" }}
          >
            <IoMdSwap />
          </button>
        </div>
        {/* this space for swapping the currencies  */}
        <div>
          <DropDownCurrency
            currencies={currencies}
            currency={toCurrency}
            setCurrency={setToCurrency}
            title="To"
          />
        </div>
      </div>

      <div className="amount-input">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {amount > 0 ? (
        <div className="convert-button">
          <button onClick={currencyConverting}>Covert</button>
        </div>
      ) : (
        "Button Grabbed by the Mouse Enter the Amount"
      )}

      {convertedAmount && (
        <div className="converted-amount">
          Converted Amount: {convertedAmount}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
