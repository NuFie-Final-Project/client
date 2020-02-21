import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";

const Slides = [
  {
    key: "slides1",
    title: "Title 1",
    backgroundColor: "#0ff"
  },
  {
    key: "slides2",
    title: "Title 2",
    backgroundColor: "#f0f"
  },
  {
    key: "slides3",
    title: "Title 3",
    backgroundColor: "#c2ccc2"
  }
];

export default function IntroSlider(props) {
  return (
    <AppIntroSlider
      slides={Slides}
      onDone={props.done}
      onSkip={props.done}
      showSkipButton
    />
  );
}
