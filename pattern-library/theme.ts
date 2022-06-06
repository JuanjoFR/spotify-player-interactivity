import { Theme } from "./types";

const palette = {
  white: "#FFFFFF",
  gray1: "#B3B3B3",
  gray2: "#312A2C"
};

const theme: Theme = {
  dark: true,
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24
  },
  colors: {
    background: "#121212",
    backgroundLight: palette.gray2,
    border: "rgb(39, 39, 41)",
    card: "rgb(18, 18, 18)",
    notification: "rgb(255, 69, 58)",
    primary: "rgb(10, 132, 255)",
    text: palette.white,
    textLight: palette.gray1
  },
  text: {
    title: {
      color: palette.white,
      fontSize: 22,
      fontWeight: "700"
    },
    label: {
      s: {
        color: palette.white,
        fontSize: 11,
        fontWeight: "400"
      },
      m1: {
        color: palette.white,
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 20
      },
      m2: {
        color: palette.gray1,
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 20
      },
      m3: {
        color: palette.white,
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 20
      }
    }
  },
  thumbnail: {
    s: 56,
    m: 115,
    l: 152
  },
  radius: {
    s: 4,
    m: 10
  },
  iconSize: {
    m: 24
  },
  pressableSize: {
    m: 48
  },
  pressedOpacity: 0.7
};

export default theme;
