import React, { useState } from "react";
import "../Css/PassGen.css";
import Toggler from "./Toggler";
import { toast, ToastContainer } from "react-toastify";

import usePasswordGenerator from "../Util/generatePassword.jsx";

const PasswordGen = () => {
  const [isCopied, setCopied] = useState(false);
  const [length, setLength] = useState(0);
  const [toggleData, setToggleData] = useState([
    {
      title: "Include Uppercase Letters",
      state: false,
    },
    {
      title: "Include Lowercase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);

  const { passwords, errorMessage, generatePassword } = usePasswordGenerator();

  const handleToggle = (index) => {
    const updatedToggle = [...toggleData];
    updatedToggle[index].state = !updatedToggle[index].state;
    setToggleData(updatedToggle);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(passwords)
      .then(() => {
        if (passwords.length > 0) {
          setCopied(true);
          toast.success("Password Copied To Successfully", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          throw new Error("Password is empty");
        }
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        toast.error("Generate the password", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="password-container">
      <ToastContainer />
      <h1 style={{ textAlign: "center", color: "white" }}>
        Password Generator
      </h1>
      <header className="password-header">
        <p>{passwords}</p>
        {isCopied ? (
          <p> Copied</p>
        ) : (
          <button onClick={copyToClipboard}>Copy</button>
        )}
      </header>
      <div className="password-body">
        <label
          htmlFor="range"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          Character Length:{length}
        </label>

        <input
          onChange={(e) => setLength(e.target.value)}
          type="range"
          value={length}
          id="range"
          name="range"
          min="4"
          max="20"
          style={{ cursor: "grab" }}
        />
      </div>
      <div>
        <Toggler toggleData={toggleData} onChange={handleToggle} />
      </div>
      <div>
        <button
          className="generate-button"
          onClick={() => {
            generatePassword(toggleData, length);
          }}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;
