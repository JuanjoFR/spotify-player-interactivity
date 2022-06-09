import { Theme as RNNTheme } from "@react-navigation/native";
import { ImageSourcePropType, TextStyle } from "react-native";

// theme
interface Colors {
  primary: string;
  background: string;
  backgroundLight: string;
  miniPlayerBackground: string;
  playerBackground: string;
  card: string;
  text: string;
  textLight: string;
  border: string;
  notification: string;
  progressBackground: string;
}

interface Spacing {
  s: number;
  m: number;
  l: number;
  xl: number;
}

interface Title {
  s: TextStyle;
  m: TextStyle;
}

interface Label {
  s1: TextStyle;
  s2: TextStyle;
  m1: TextStyle;
  m2: TextStyle;
  m3: TextStyle;
}

interface Text {
  title: Title;
  label: Label;
}

interface Thumbnail {
  s: number;
  m: number;
  l: number;
  xl: number;
}

interface Radius {
  s: number;
  m: number;
  l: number;
}

interface IconSize {
  s: number;
  m: number;
  l: number;
  xl: number;
}

interface PressableSize {
  m: number;
}

export interface Theme extends RNNTheme {
  dark: boolean;
  colors: Colors;
  spacing: Spacing;
  text: Text;
  thumbnail: Thumbnail;
  radius: Radius;
  iconSize: IconSize;
  pressableSize: PressableSize;
  pressedOpacity: number;
  tabbarHeight: number;
  miniPlayerHeight: number;
}

// data
export interface Preview {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

export interface Detail {
  artist: string;
  song: string;
  image: ImageSourcePropType;
  duration: string;
}
