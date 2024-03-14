import React from "react";
import { Toggle } from "./style";
import PropTypes from "prop-types";

const ToggleMessageComponent = (props) => {
  const [elementWidth, setElementWidth] = React.useState(0);

  React.useEffect(() => {
    setElementWidth(document.getElementById("toggle").offsetWidth);
  }, []);

  return (
    <Toggle
      id="toggle"
      $success={props.success}
      $elementWidth={`${elementWidth}px`}
    >
      <h1 className="cta-medium">
        {props.success === true ? "Mensagem Enviada" : "Mensagem Não Enviada"}
      </h1>
    </Toggle>
  );
};

ToggleMessageComponent.prototype = {
  success: PropTypes.bool,
};

export default ToggleMessageComponent;
