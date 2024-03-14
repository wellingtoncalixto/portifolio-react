import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: inline;
  margin: 0 ${(props) => props.theme.space._8}
    ${(props) => props.theme.space._4} ${(props) => props.theme.space._8};
  color: ${(props) => props.theme.colors.c3};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.c10};
  border: ${(props) => props.theme.space._4} solid
    ${(props) => props.theme.colors.c10};
  border-radius: 0.625rem;
  font-size: 1.5rem;
  min-height: 6rem;
  resize: none;
  padding: ${(props) => props.theme.space._12};

  &:hover,
  &:focus {
    border: ${(props) => props.theme.space._4} solid
      ${(props) => props.theme.colors.b6};
    outline: 0;
  }

  &:disabled {
    opacity: 0.5;

    &:hover,
    &:focus {
      border-color: ${(props) => props.theme.colors.c10};
      outline: 0;
    }
  }
  ${(props) =>
    props.$error &&
    css`
      border-color: #af0404;
      outline: 0;
      &:hover,
      &:focus {
        border-color: #af0404;
        outline: 0;
      }
    `}
`;

export const ErrorMessage = styled.span`
  color: #af0404;
  margin: ${(props) => props.theme.space._4} ${(props) => props.theme.space._8};
`;
