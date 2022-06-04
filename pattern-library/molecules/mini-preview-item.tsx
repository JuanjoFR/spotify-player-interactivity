import * as React from "react";
import { Pressable } from "react-native";
import Label from "../atoms/label";
import { MostPlayed } from "../types";

interface ComponentProps {
  data: MostPlayed;
}

function MiniPreviewItem({ data }: ComponentProps) {
  return (
    <Pressable>
      <Label>{data.name}</Label>
    </Pressable>
  );
}

export default MiniPreviewItem;
