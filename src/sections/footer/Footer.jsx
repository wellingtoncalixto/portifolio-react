import React from "react";
import { BoldText, Footer as FooterComponent, Message } from "./style";
const Footer = () => {
  return (
    <FooterComponent>
      <Message className="body-1">
        Desenvolvido por <BoldText>Wellington Calixto</BoldText> |{" "}
        <span>2024 todos os direitos reservados</span>
      </Message>
    </FooterComponent>
  );
};

export default Footer;
