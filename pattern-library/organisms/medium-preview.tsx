import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import MediumPreviewList from "../molecules/medium-preview-list";
import SectionHeader from "../molecules/section-header";
import { Preview } from "../types";

interface ComponentProps {
  headerText: string;
  data: Preview[];
  headerStyle: StyleProp<ViewStyle>;
  containerStyle: StyleProp<ViewStyle>;
  listContentContainerStyle: StyleProp<ViewStyle>;
  onItemPress: (item: Preview) => void;
}

function MediumPreview({
  headerText,
  data,
  headerStyle,
  containerStyle,
  listContentContainerStyle,
  onItemPress
}: ComponentProps) {
  return (
    <View style={[containerStyle]}>
      <SectionHeader text={headerText} style={headerStyle} />
      <MediumPreviewList
        data={data}
        contentContainerStyle={listContentContainerStyle}
        onItemPress={onItemPress}
      />
    </View>
  );
}

export default MediumPreview;
