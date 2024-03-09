import React from "react";
import { Container, Label, TextArea as TextAreaComponent } from "./style";
import { ErrorMessage } from "../input/style";

const TextArea = ({ id, label, setValue, error, ...props }) => {
  return (
    <Container>
      <Label className="label-1" htmlFor={id}>{label}</Label>
      <TextAreaComponent
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

export default TextArea;
