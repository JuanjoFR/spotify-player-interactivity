import { Theme as RNNTheme } from "@react-navigation/native";

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

export interface Theme extends RNNTheme {
  colors: Colors;
  spacing: Spacing;
}
