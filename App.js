import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FacebookScreen from "./Facebook";
import InstagramScreen from "./Instagram";

export default class App extends React.Component {
  render() {
    return( 
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Instagram: { screen: InstagramScreen }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
