import React from "react";
import {
  Label,
  Input as InputComponent,
  ErrorMessage,
  Container,
} from "./style";

const Input = ({ id, label, setValue, error, ...props }) => {
  return (
    <Container>
      <Label className="label-1" htmlFor={id}>{label}</Label>
      <InputComponent
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        $error={error}
        {...props}
      />
      {error ? (
        <ErrorMessage className="cta-medium" style={{ display: "block" }}>
          {error}
        </ErrorMessage>
      ) : null}
    </Container>
  );
};

export default Input;
