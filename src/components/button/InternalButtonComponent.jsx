import React from "react";
import { Button } from "./styles";

const InternalButtonComponent = ({ text, type, ...props }) => {
  return (
    <Button type={type} {...props}>
      {text}
    </Button>
  );
};

export default InternalButtonComponent;
