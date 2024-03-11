import React from "react";
import {
  Label,
  Input as InputComponent,
  ErrorMessage,
  Container,
} from "./style";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <Container>
      <Label className="label-1" htmlFor={props.id}>
        {props.label}
      </Label>
      <InputComponent
        type="text"
        id={props.id}
        name={props.id}
        onChange={({ target }) => props.setValue(target.value)}
        $error={props.error}
        onBlur={props.onBlur}
      />
      {props.error ? (
        <ErrorMessage className="cta-medium" style={{ display: "block" }}>
          {props.error}
        </ErrorMessage>
      ) : null}
    </Container>
  );
};

Input.prototype = {
  id: PropTypes.number || PropTypes.string,
  label: PropTypes.string,
  setValue: PropTypes.func,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  validate: PropTypes.func,
};

export default Input;
