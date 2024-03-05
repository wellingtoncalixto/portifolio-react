import React from "react";
import { GithubLink, LinkedinLink, WhatsappLink } from "./style";

const IconLinkComponent = ({ link, icon, height, width, ...props }) => {
  return (
    <>
      {icon && icon === "git" && (
        <a href={link} {...props}>
          <GithubLink height={height} width={width} />
        </a>
      )}
      {icon && icon === "linkedin" && (
        <a href={link} {...props}>
          <LinkedinLink height={height} width={width} />
        </a>
      )}
      {icon && icon === "whatsapp" && (
        <a href={link} {...props}>
          <WhatsappLink height={height} width={width} />
        </a>
      )}
    </>
  );
};

export default IconLinkComponent;
