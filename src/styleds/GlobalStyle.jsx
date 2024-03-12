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

    *,*:after,*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0
}

    html {
      font-size: 16px;
    }

    html::-webkit-scrollbar {
      width: 0.5rem;
      height: 0px;
    };

    html::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.b7};
      border-left: 0.125rem solid #fff;
      border-right: 0.125rem solid #fff;
      border-radius: 0.25rem;
    };

    html::-webkit-scrollbar-track {
      background: #fff;
    };

    body {
      margin: 0px;
      background-color: ${(props) => props.theme.colors.b1};
      text-decoration: none;
    };

    main {
      display: grid;
      grid-template-areas: 
      "header" 
      "introducao" 
      "about" 
      "projects" 
      "contact" 
      ;
      grid-template-rows: max-content max-content max-content max-content max-content;
      
    }

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
    .content {
      padding: 0 ${({ theme }) => theme.space._24};
    };

    .title-container {
      width: 100%;
      display: flex;
      justify-content: center;
    };

    .title {
      color: ${(props) => props.theme.colors.c2};
      border-bottom: 0.25rem solid ${(props) => props.theme.colors.b5};
    };

    .title::before {
      content: "<";
      color: ${(props) => props.theme.colors.b5};
    };

    .title::after {
      content: ">";
      color: ${(props) => props.theme.colors.b5};
    };

    .sub-title {
      text-align: center;
      margin-top: ${(props) => props.theme.space.global_space_60};
      color: ${(props) => props.theme.colors.c4};
      position: relative;
      border-left: 4px solid ${(props) => props.theme.colors.b5};
      border-right: 4px solid ${(props) => props.theme.colors.b5};
    }

    @media screen and (min-width: 320px) {
      html {
          font-size: 12px;    
      }   
    }  
    
    @media screen and (min-width: 320px) and (min-height: 100px) and (max-height: 320px) {
      main {
        grid-template-rows: max-content max-content max-content repeat(2, 100vh);
      }
    } 

    @media screen and (min-width: 320px) and (min-height: 321px){
      main {
        grid-template-rows: max-content 100vh max-content repeat(2, 100vh);
      }
    } 

    @media screen and (min-width:768px) {  
      main {
        grid-template-rows: max-content 100vh max-content repeat(2, 100vh);
      }
    }

    @media screen and (min-width:992px) and (min-height: 700px) {  
      html {
          font-size: 16px;
        }
    }

    @media screen and (min-width: 1400px) { 
      main {
        grid-template-rows: max-content repeat(4, 100vh);
      }

      .content {
        padding-left: 0px;
        padding-right: 0px;
        max-width: 1300px;
        margin: 0px auto;
      }
     }

  `;

export default GlobalStyle;
