import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import LargePreviewList from "../molecules/large-preview-list";
import SectionHeader from "../molecules/section-header";
import { MadeForYou as IMadeForYou } from "../types";

interface ComponentProps {
  headerText: string;
  data: IMadeForYou[];
  containerStyle: StyleProp<ViewStyle>;
}

function MostPlayed({ headerText, data, containerStyle }: ComponentProps) {
  return (
    <View style={containerStyle}>
      <SectionHeader text={headerText} />
      <LargePreviewList data={data} />
    </View>
  );
}

export default MostPlayed;
