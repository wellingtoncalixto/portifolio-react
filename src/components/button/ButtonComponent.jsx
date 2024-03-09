import React from "react";
import { LinkButton, NormalButton } from "./styles";

const ButtonComponent = ({ text, buttonType, buttonStyle, ...props }) => {
  return (
    <>
      {buttonType === "linkButton" && (
        <LinkButton $buttonStyle={buttonStyle} {...props}>
          {text}
        </LinkButton>
      )}
      {buttonType === "normalButton" && (
        <NormalButton $buttonStyle={buttonStyle} {...props}>
          {text}
        </NormalButton>
      )}
    </>
  );
};

export default ButtonComponent;
