import React, { Component } from "react";
import Directory from "./Directory";
import DivisionInfo from "./DivisionInfo";
import { View, Platform } from "react-native";
import { creatStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const DirectoryNavigator = creatStackNavigator(
  {
    Directory: { screen: Directory },
    DivisionInfo: { screen: DivisionInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#778899",
      },
      headerTintColor: "#708090",
      headerTitleStyle: {
        color: "#2F4F4F",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
      Home: { screen: Home }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#778899'
          },
          headerTintColor: '#708090',
          headerTitleStyle: {
              color: '#2F4F4F'
          }
      }
  }
);

const MainNavigator = createDrawerNavigator(
  {
      Home: { screen: HomeNavigator },
      Directory: { screen: DirectoryNavigator }
  },
  {
      drawerBackgroundColor: '#2F4F4F'
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
