import React from "react";
import { DotButton } from "./style";

const CustomDotComponent = ({ onClick, active }) => {
  return <DotButton $active={active} onClick={() => onClick()}></DotButton>;
};

export default CustomDotComponent;
