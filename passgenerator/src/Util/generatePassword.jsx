import { useState } from "react";
import {
  upperCaseLetters,
  lowerCaseLetters,
  numbers,
  specialCharacters,
} from "./Character.jsx";
import { toast } from "react-toastify";

const usePasswordGenerator = () => {
  const [passwords, setPasswords] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charSet = "";
    let generatedPassword = "";
    const selectedBox = checkBoxData.filter((item) => item.state);

    //// now we will check if the user has selected any checkbox
    if (selectedBox.length === 0) {
      setErrorMessage("Please select at least one checkbox");
      toast.error("Please select at least one checkbox", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    /// now set the password random based on the character and length buddy

    for (let i = 0; i < selectedBox.length; i++) {
      if (selectedBox[i].title === "Include Uppercase Letters") {
        charSet += upperCaseLetters;
      } else if (selectedBox[i].title === "Include Lowercase Letters") {
        charSet += lowerCaseLetters;
      } else if (selectedBox[i].title === "Include Numbers") {
        charSet += numbers;
      } else if (selectedBox[i].title === "Include Symbols") {
        charSet += specialCharacters;
      } else {
        setErrorMessage("Please select at least one checkbox");
      }
    }

    for (let i = 0; i < length; i++) {
      const randomPass = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomPass];
      setPasswords(generatedPassword);
    }
  };

  return {
    passwords,
    errorMessage,
    generatePassword,
  };
};

export default usePasswordGenerator;
