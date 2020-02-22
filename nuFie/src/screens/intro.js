import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const Slides = [
  {
    key: "slides1",
    title: "Disover People With Same Interest",
    text: "There will be many people with same Interest like you in our app",
    image: require("../../assets/asset3.png"),
    colors: ["#78ebcc", "#16a2ff"]
  },
  {
    key: "slides2",
    title: "Do Something Fun and New",
    text: "Every new friends is a new adventure and start of more memories",
    image: require("../../assets/asset1.png"),
    colors: ["#89f7fe", "#66a6ff"]
  },
  {
    key: "slides3",
    title: "Find new Connection",
    image: require("../../assets/asset2.png"),
    text: "Happines and Connection are made by meeting new people.",
    colors: ["#00f2fe", "#4facfe"]
  }
];

export default function IntroSlider(props) {
  const renderSlider = props => (
    <LinearGradient colors={props.item.colors}>
      <View
        style={[
          styles.container,
          { width: props.dimensions.width, height: props.dimensions.height }
        ]}
      >
        <View style={styles.imageWrapper}>
          <ImageBackground
            resizeMode="contain"
            source={props.item.image}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <Text style={styles.sliderTitle}>{props.item.title}</Text>
        <View style={styles.textwrapper}>
          <Text style={styles.sliderText}>{props.item.text}</Text>
        </View>
      </View>
    </LinearGradient>
  );
  return (
    <AppIntroSlider
      slides={Slides}
      onDone={props.done}
      onSkip={props.done}
      renderItem={renderSlider}
      showSkipButton
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageWrapper: {
    height: 300,
    width: "80%"
  },
  sliderTitle: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 22,
    color: "#fff"
  },
  sliderText: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    color: "#fff"
  },
  textwrapper: {
    padding: 10,
    width: "85%"
  }
});
