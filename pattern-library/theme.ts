import { Theme } from "./types";

const palette = {
  white: "#FFFFFF",
  green: "#65D46E",
  gray1: "#B3B3B3",
  gray2: "#3E434B",
  gray3: "#312A2C",
  gray4: "#0E151E"
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
    backgroundLight: palette.gray3,
    miniPlayerBackground: palette.gray4,
    playerBackground: palette.gray4,
    border: "rgb(39, 39, 41)",
    card: "rgb(18, 18, 18)",
    notification: "rgb(255, 69, 58)",
    primary: palette.green,
    text: palette.white,
    textLight: palette.gray1,
    progressBackground: palette.gray2
  },
  text: {
    title: {
      s: {
        color: palette.white,
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 20
      },
      m: {
        color: palette.white,
        fontSize: 22,
        fontWeight: "700"
      }
    },
    label: {
      s1: {
        color: palette.white,
        fontSize: 11,
        fontWeight: "400"
      },
      s2: {
        color: palette.gray1,
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
    s: 39,
    m: 56,
    l: 115,
    xl: 152
  },
  radius: {
    s: 4,
    m: 6,
    l: 10
  },
  iconSize: {
    s: 20,
    m: 24,
    l: 34,
    xl: 64
  },
  pressableSize: {
    m: 48
  },
  pressedOpacity: 0.7,
  tabbarHeight: 52,
  miniPlayerHeight: 56
};

export default theme;
