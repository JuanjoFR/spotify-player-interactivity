import { Theme } from "./types";

const palette = {
  white: "#FFFFFF"
};

const theme: Theme = {
  dark: true,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32
  },
  colors: {
    background: "#121212",
    border: "rgb(39, 39, 41)",
    card: "rgb(18, 18, 18)",
    notification: "rgb(255, 69, 58)",
    primary: "rgb(10, 132, 255)",
    text: palette.white
  },
  text: {
    title: {
      color: palette.white,
      fontSize: 22,
      fontWeight: "700"
    }
  }
};

export default theme;
