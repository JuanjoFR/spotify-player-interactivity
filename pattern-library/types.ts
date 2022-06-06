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
  m1: TextStyle;
  m2: TextStyle;
}

interface Text {
  title: TextStyle;
  label: Label;
}

interface Thumbnail {
  s: number;
  m: number;
}

interface Radius {
  s: number;
  m: number;
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
  pressedOpacity: number;
}

// data
export interface MostPlayed {
  id: string;
  name: string;
  image: ImageSourcePropType;
}
export interface MadeForYou {
  id: string;
  name: string;
  image: ImageSourcePropType;
}
