import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(1)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -2,
      duration: 1500
    }).start();
  }

  render() {
    const animatedStyles = {
      transform: [
        {
          scaleY: this.state.animation
        }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>The scale</Text>
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
  }
});

AppRegistry.registerComponent("animations", () => animations);
