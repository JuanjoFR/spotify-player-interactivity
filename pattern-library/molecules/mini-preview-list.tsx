import * as React from "react";
import { View } from "react-native";
import MiniPreviewItem from "../molecules/mini-preview-item";
import { MostPlayed } from "../types";

interface ComponentProps {
  data: MostPlayed[];
}

function MiniPreviewList({ data }: ComponentProps) {
  return (
    <View>
      {data.map(item => (
        <MiniPreviewItem key={item.id} data={item} />
      ))}
    </View>
  );
}

export default MiniPreviewList;
