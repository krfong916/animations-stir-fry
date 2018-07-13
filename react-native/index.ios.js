import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation : new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500
    }).start();
  }

  render() {
    const rotateInterpolate =
      this.state.animation.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "180deg"],
      })
    const animatedStyles = {
      transform: [
        {
          rotate: rotateInterpolate
        }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>Hello Rotate!</Text>
          </Animated.View>
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  }
});

AppRegistry.registerComponent("animations", () => animations);
