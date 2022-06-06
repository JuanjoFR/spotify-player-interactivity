import { Theme as RNNTheme } from "@react-navigation/native";
import { ImageSourcePropType, TextStyle } from "react-native";

// theme
interface Colors {
  primary: string;
  background: string;
  backgroundLight: string;
  card: string;
  text: string;
  textLight: string;
  border: string;
  notification: string;
}

interface Spacing {
  s: number;
  m: number;
  l: number;
  xl: number;
}

interface Label {
  s: TextStyle;
  m: TextStyle;
}

interface Text {
  title: TextStyle;
  label: Label;
}

interface Thumbnail {
  m: number;
}

interface Radius {
  s: number;
}

interface IconSize {
  m: number;
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
}

// data
export interface MostPlayed {
  id: string;
  name: string;
  image: ImageSourcePropType;
}
