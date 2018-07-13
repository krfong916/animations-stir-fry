import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start();
  }
  
  render() {

    const widthInterpolate =
      this.state.animation.interpolate({
        inputRange: [0,1],
        outputRange: ["20%", "50%"]
    })

    const heightInterpolate =
      this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["20%", "30%"]
      });

    const animatedStyles = {
      width: widthInterpolate,
      height: heightInterpolate
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "tomato",
  }
});

AppRegistry.registerComponent("animations", () => animations);
