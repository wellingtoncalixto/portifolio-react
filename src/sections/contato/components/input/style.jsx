import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  width: max-content;
  margin: 0 ${({ theme }) => theme.space.global_space_08}
    ${({ theme }) => theme.space.global_space_04}
    ${({ theme }) => theme.space.global_space_08};
  color: ${({ theme }) => theme.cores.c3};
  font-weight: ${({ theme }) => theme.font_weight.bold};
`;

export const Input = styled.input`
  width: auto;
  background-color: ${({ theme }) => theme.cores.c10};
  border: ${({ theme }) => theme.space.global_space_04} solid
    ${({ theme }) => theme.cores.white};
  border-radius: 0.625rem;
  font-size: 1.5rem;

  padding: ${({ theme }) => theme.space.global_space_12};

  &:hover,
  &:focus {
    border: ${({ theme }) => theme.space.global_space_04} solid
      ${({ theme }) => theme.cores.b6};
    outline: 0;
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
  margin: ${({ theme }) => theme.space.global_space_04}
    ${({ theme }) => theme.space.global_space_08};
`;
