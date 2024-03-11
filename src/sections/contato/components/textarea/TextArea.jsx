import React from "react";
import { Container, Label, TextArea as TextAreaComponent } from "./style";
import { ErrorMessage } from "../input/style";
import PropTypes from "prop-types";

const TextArea = (props) => {
  return (
    <Container>
      <Label className="label-1" htmlFor={props.id}>
        {props.label}
      </Label>
      <TextAreaComponent
        type="text"
        id={props.sid}
        name={props.id}
        onChange={({ target }) => props.setValue(target.value)}
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

TextArea.prototype = {
  id: PropTypes.number || PropTypes.string,
  label: PropTypes.string,
  setValue: PropTypes.func,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  validate: PropTypes.func,
};

export default TextArea;
