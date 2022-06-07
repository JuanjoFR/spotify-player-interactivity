import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import MediumPreviewList from "../molecules/medium-preview-list";
import SectionHeader from "../molecules/section-header";
import { Preview } from "../types";

interface ComponentProps {
  headerText: string;
  data: Preview[];
  containerStyle: StyleProp<ViewStyle>;
  onItemPress: (item: Preview) => void;
}

function MediumPreview({
  headerText,
  data,
  containerStyle,
  onItemPress
}: ComponentProps) {
  return (
    <View style={[containerStyle]}>
      <SectionHeader text={headerText} />
      <MediumPreviewList data={data} onItemPress={onItemPress} />
    </View>
  );
}

export default MediumPreview;
