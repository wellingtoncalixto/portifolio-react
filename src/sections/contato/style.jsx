import styled from "styled-components";
import ButtonComponent from "../../components/button/ButtonComponent";

export const ContatoSection = styled.section`
  background-color: ${(props) => props.theme.cores.white};
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;

    & > div:last-of-type {
      grid-column: 1/3;
    }
  }
`;

export const SubmitButton = styled(ButtonComponent)`
  width: max-content;
  margin: 0 auto;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-image: none;
    }
  }

  @media screen and (min-width: 769px) {
    grid-column: 1/3;
  }
`;

export const MediasContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LineDecoration = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.cores.c9};
  margin: ${({ theme }) => theme.space.global_space_24} 0px;
  border-radius: 4px;
`;
