import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  cores: {
    black: "#000000",
    white: "#ffffff",
    c1: "#1c1c1c",
    c2: "#2d2d2d",
    c3: "#464646",
    c4: "#5b5b5b",
    c5: "#6f6f6f",
    c6: "#9b9b9b",
    c7: "#afafaf",
    c8: "#c9c9c9",
    c9: "#dedede",
    c10: "#f0f0f0",
    b1: "#caf0f8",
    b2: "#ade8f4",
    b3: "#90e0ef",
    b4: "#48cae4",
    b5: "#00b4d8",
    b6: "#0096c7",
    b7: "#0077b6",
    b8: "#023e8a",
    b9: "#03045e",
  },
  space: {
    global_space_04: "0.25rem",
    global_space_08: "0.5rem",
    global_space_12: "0.75rem",
    global_space_16: "1rem",
    global_space_20: "1.25rem",
    global_space_24: "1.5rem",
    global_space_32: "2rem",
    global_space_40: "2.5rem",
    global_space_48: "3rem",
    global_space_60: "3.75rem",
    global_space_72: "4.5rem",
    global_space_80: "5rem",
    global_space_100: "6.25rem",
    global_space_200: "12.5rem",
    global_space_300: "18.75rem",
    global_space_400: "20rem",
  },
  font_family: {
    kanit: ["Kanit", "Helvetica", "sans-serif"],
    jetbrains: ["JetBrains Mono", "sans-serif"],
  },
  font_size: {
    display_1: "4rem",
    display_2: "3.25rem",
    heading_1: "2.25rem",
    heading_2: "1.75rem",
    heading_3: "1.5rem",
    body_1: "1rem",
    body_2: "0.75rem",
    cta_medium: "1rem",
    cta_small: "0.75rem",
    label_1: "1rem",
    label_2: "0.75rem",
    small_label: "0.75rem",
  },
  line_heigth: {
    display_1: "1.06",
    display_2: "1.07",
    heading_1: "1.1",
    heading_2: "1.14",
    heading_3: "1.16",
    body_1: "1.5",
    body_2: "1.3",
  },
  letter_spacing: {
    display_1: "5px",
    display_2: "5px",
    heading_1: "3px",
    heading_2: "0.125rem",
    heading_3: "3px",
    body_1: "-5px",
    body_2: "-5px",
    cta_medium: "1.5px",
    cta_small: "1px",
    label_1: "1px",
    label_2: "1px",
    small_label: "0.25px",
  },
  font_weight: {
    regular: "400",
    bold: "700",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
