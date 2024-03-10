import React from "react";
import { BoldText, Footer as FooterComponent, Message } from "./style";
const Footer = () => {
  return (
    <FooterComponent>
      <Message className="body-1">
        Desenvolvido por <BoldText>Wellington Calixto</BoldText> | 2024 todos os
        direitos reservados
      </Message>
    </FooterComponent>
  );
};

export default Footer;
