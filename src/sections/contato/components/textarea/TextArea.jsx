import React from "react";
import { Container, Label, TextArea as TextAreaComponent } from "./style";
import { ErrorMessage } from "../input/style";
import PropTypes from "prop-types";

const TextArea = (props) => {
  const {
    style,
    id,
    label,
    setValue,
    error,
    onChange,
    onBlur,
    validate,
    success,
    disabled,
    ...rest
  } = props;
  return (
    <Container style={style}>
      <Label className="label-1" htmlFor={id}>
        {label}
      </Label>
      <TextAreaComponent
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        onBlur={onBlur}
        rows="10"
        $error={error}
        disabled={disabled}
        {...rest}
      />
      <ErrorMessage className="cta-medium">
        {props.error && props.error}
      </ErrorMessage>
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
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default TextArea;
