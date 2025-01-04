import React from "react";
import Button from "../customcomponents/ButtonComp.js";
import Input from "../customcomponents/InputComp.js";
import Label from "../customcomponents/LabelComp.js";

const DynamicContent = ({ type }) => {
  console.log(type);
  switch (type) {
    case "Button":
      return <Button />;
    case "Input":
      return <Input />;
    case "Label":
      return <Label />;
    default:
      break;
  }
};

export default DynamicContent;
