import React from "react";

const ButtonComponent = (props) => {
  return <button className={props.buttonClass}>{props.buttonText}</button>;
};

export default ButtonComponent;
