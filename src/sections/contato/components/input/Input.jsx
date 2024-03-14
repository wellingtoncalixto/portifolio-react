import React from "react";
import {
  Label,
  Input as InputComponent,
  ErrorMessage,
  Container,
} from "./style";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
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
    <Container success={success}>
      <Label className="label-1" htmlFor={id}>
        {label}
      </Label>
      <InputComponent
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        $error={error}
        onBlur={onBlur}
        disabled={disabled}
        {...rest}
      />

      <ErrorMessage className="cta-medium">
        {props.error && props.error}
      </ErrorMessage>
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
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
