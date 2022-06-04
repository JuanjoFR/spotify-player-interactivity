import { Theme as RNNTheme } from "@react-navigation/native";
import { TextStyle } from "react-native";

// theme
interface Colors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

interface Spacing {
  s: number;
  m: number;
  l: number;
  xl: number;
}

interface Text {
  title: TextStyle;
}

export interface Theme extends RNNTheme {
  dark: boolean;
  colors: Colors;
  spacing: Spacing;
  text: Text;
}

// data
export interface MostPlayed {
  id: string;
  name: string;
}
