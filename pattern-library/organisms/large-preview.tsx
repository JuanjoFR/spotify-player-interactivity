import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import LargePreviewList from "../molecules/large-preview-list";
import SectionHeader from "../molecules/section-header";
import { Preview } from "../types";

interface ComponentProps {
  headerText: string;
  data: Preview[];
  containerStyle: StyleProp<ViewStyle>;
}

function LargePreview({ headerText, data, containerStyle }: ComponentProps) {
  return (
    <View style={containerStyle}>
      <SectionHeader text={headerText} />
      <LargePreviewList data={data} />
    </View>
  );
}

export default LargePreview;
