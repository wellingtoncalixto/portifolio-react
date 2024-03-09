import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Classes Tipograficas */
    .display-1 {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.display_1};
      line-height: ${(props) => props.theme.line_height.display_1};
      letter-spacing: ${(props) => props.theme.letter_spacing.display_1};
    };

    .display-2 {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.display_2};
      line-height: ${(props) => props.theme.line_height.display_2};
      letter-spacing: ${(props) => props.theme.letter_spacing.display_2};
    };

    .heading-1 {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.heading_1};
      line-height: ${(props) => props.theme.line_height.heading_1};
      letter-spacing: ${(props) => props.theme.letter_spacing.heading_1};
    };

    .heading-2 {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.heading_2};
      line-height: ${(props) => props.theme.line_height.heading_2};
      letter-spacing: ${(props) => props.theme.letter_spacing.heading_2};
    };

    .heading-3-kanit {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.heading_3};
      line-height: ${(props) => props.theme.line_height.heading_3};
      letter-spacing: ${(props) => props.theme.letter_spacing.heading_3};
    };

    .heading-3-jetbrains {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.heading_3};
      line-height: ${(props) => props.theme.line_height.heading_3};
      letter-spacing: ${(props) => props.theme.letter_spacing.heading_3};
    };

    .body-1 {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.body_1};
      line-height: ${(props) => props.theme.line_height.body_1};
      letter-spacing: ${(props) => props.theme.letter_spacing.body_1};
    };

    .body-2 {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.body_2};
      line-height: ${(props) => props.theme.line_height.body_2};
      letter-spacing: ${(props) => props.theme.letter_spacing.body_2};
    };

    .cta-medium {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.cta_medium};
    };

    .cta-small {
      font-family: ${(props) => props.theme.font_family.kanit};
      font-size: ${(props) => props.theme.font_size.cta_small};
    };

    .label-1 {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.label_1};
      letter-spacing: ${(props) => props.theme.letter_spacing.label_1};
    };

    .label-2 {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.label_2};
      letter-spacing: ${(props) => props.theme.letter_spacing.label_2};
    };

    .small-label-captalize {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.small_label};
      letter-spacing: ${(props) => props.theme.letter_spacing.small_label};
      text-transform: capitalize;
    };

    .small-label-upercase {
      font-family: ${(props) => props.theme.font_family.jetbrains};
      font-size: ${(props) => props.theme.font_size.small_label};
      letter-spacing: ${(props) => props.theme.letter_spacing.small_label};
      text-transform: uppercase;
    };

    /* Estilos Globais */
    html {
      font-size: 12px;
    };

    html::-webkit-scrollbar {
      width: 8px;
      height: 0px;
    };

    html::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.cores.b7};
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
      border-radius: 4px;
    };

    html::-webkit-scrollbar-track {
      background: #fff;
    };

    body {
      width: 100%;
      margin: 0px;
      background-color: ${(props) => props.theme.cores.b1};
      box-sizing: border-box;
      text-decoration: none;
    };

    main {
      width: 100%;
    };

    h1,
    h2,
    h3,
    p {
      margin: 0px;
      padding: 0px;
    };

    ul,
    li {
      margin: 0px;
      padding: 0px;
    };

    li {
      list-style: none;
    };

    /* Classes Globais */
    .section {
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
    };

    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${(props) => props.theme.space.global_space_24};
    };

    .display-none {
      display: none;
    };

    .title-container {
      width: 100%;
      display: flex;
      justify-content: center;
    };

    .title {
      color: ${(props) => props.theme.cores.c2};
      border-bottom: 0.25rem solid ${(props) => props.theme.cores.b5};
    };

    .title::before {
      content: "<";
      color: ${(props) => props.theme.cores.b5};
    };

    .title::after {
      content: ">";
      color: ${(props) => props.theme.cores.b5};
    };

    .sub-title {
      width: 100%;
      text-align: center;
      margin-top: ${(props) => props.theme.space.global_space_60};
      color: ${(props) => props.theme.cores.c4};
      position: relative;
      border-left: 4px solid ${(props) => props.theme.cores.b5};
      border-right: 4px solid ${(props) => props.theme.cores.b5};
    }

    .icon {
      width: 30px;
      height: 30px;
      background-size: cover;
    };

    html {
      font-size: 8px;
    };

    @media screen and (min-width: 321px) and (max-width: 375px)   {
      html {
        font-size: 12px;
      }
    }

    //Media global
    @media screen and (min-width: 461px) {
      html {
        font-size: 16px;
      }
    }

    /* XX-Large devices (larger desktops, 1400px and up) */
    @media screen and (min-width: 1400px) {
      .content {
        padding-left: 0px;
        padding-right: 0px;
        max-width: 1300px;
        margin: 0px auto;
      }
    }
  `;

export default GlobalStyle;
