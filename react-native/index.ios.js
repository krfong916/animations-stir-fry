import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(1)
  }

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 250,
    }).start();
  }

  render() {
    const yInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [0, -25]
    });

    const boxStyle = {
      transform: [
        {scaleY: this.state.animation},
        {translateY: yInterpolate}
      ]
    }

    return (
      <View style={styles.container}>
        <View onPress={this.startAnimation}>
          <View style={styles.box2} />
          <Animated.View style={[styles.box, boxStyle]} />
        </View>
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
    width: 100,
    height: 100,
    backgroundColor: "tomato",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  }
});

AppRegistry.registerComponent("animations", () => animations);

// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";
//
// export default class animations extends Component {
//   state = {
//     animation: new Animated.Value(100)
//   }
//
//   componentDidMount() {
//     Animated.timing(this.state.animation, {
//       toValue: 200
//     }).start();
//   }
//
//   render() {
//     const boxStyle = {
//       height: this.state.animation
//     }
//     return (
//       <View style={styles.container}>
//         <View onPress={this.startAnimation}>
//           <Animated.View style={[styles.box, boxStyle]} />
//           <View style={styles.box2} />
//         </View>
//       </View>
//     );
//
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "tomato",
//   },
//   box2: {
//     width: 100,
//     height: 100,
//     backgroundColor: "blue",
//   }
// });
//
// AppRegistry.registerComponent("animations", () => animations);

// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";
//
// export default class animations extends Component {
//   state = {
//     animation: new Animated.Value(150)
//   }
//
//   startAnimation = () => {
//     Animated.timing(this.state.animation, {
//       toValue: 300,
//       duration: 1500
//     }).start();
//   }
//
//   render() {
//     const animatedStyles = {
//       width: this.state.animation,
//       height: this.state.animation
//     }
//     return (
//       <View style={styles.container}>
//         <TouchableWithoutFeedback onPress={this.startAnimation}>
//           <Animated.View style={[styles.box, animatedStyles]}>
//             <Text>ghost place in most space
//             I take the kitchen sink and make mo space
//             Runnin round the roller rink for cats who don't think
//             </Text>
//           </Animated.View>
//         </TouchableWithoutFeedback>
//       </View>
//     );
//
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//      // width: 150,
//      // height: 150,
//     backgroundColor: "tomato",
//   }
// });
//
// AppRegistry.registerComponent("animations", () => animations);
