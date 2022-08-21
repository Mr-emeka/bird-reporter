import {DefaultTheme} from "styled-components";

const defaultTheme: DefaultTheme = {
  fontSize: {
    h1: {fontSize: "1.5rem", lineHeight: "1.75rem"},
    h2: {fontSize: "", lineHeight: ""},
    h3: {fontSize: "", lineHeight: ""},
    h4: {fontSize: "", lineHeight: ""},
    h5: {fontSize: "", lineHeight: ""},
    h6: {fontSize: "1rem", lineHeight: "1.188rem"},
  },
  font: {
    body: "Roboto",
    optional: "sans-serif",
  },
  colors: {
    yellow: "#F6CA00",
    purple: "#005B96",
    white: "#FFFFFF",
    blue: "#1BC5BD",
    grey: "#F3F6F9",
    darkBlue: "#011F4B",
  },
  borderRadius: {
    sm: "0.313rem",
    md: "",
    lg: "",
  },
  buttonPalette: {
    secondary: {
      background: "#FFEBE6",
      color: "#FB5806",
    },
    primary: {
      background: "#005B96",
      color: "#ffffff",
    },
    tertiary: {
      background: "#EDF0F4",
      color: "#000000",
    },
  },
};

export default defaultTheme;
