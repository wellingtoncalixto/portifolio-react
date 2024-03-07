import React from "react";
import { LinkButton, NormalButton } from "./styles";

const ButtonComponent = ({
  text,
  buttonType,
  primary,
  secondary,
  ...props
}) => {
  return (
    <>
      {buttonType === "linkButton" && (
        <LinkButton primary={primary} secondary={secondary} {...props}>
          {text}
        </LinkButton>
      )}
      {buttonType === "normalButton" && (
        <NormalButton primary={primary} secondary={secondary} {...props}>
          {text}
        </NormalButton>
      )}
    </>
  );
};

export default ButtonComponent;
