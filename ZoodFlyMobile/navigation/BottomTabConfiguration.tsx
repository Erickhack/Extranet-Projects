import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import Home from "../screens/Home";
import Svg, { Path } from "react-native-svg";
import { RootTabParamList } from "../types";
import {
  BottomTabDocsIcon,
  BottomTabHomeIcon,
  BottomTabNotificationIcon,
  BottomTabProfileIcon,
  BottomTabSearchIcon,
} from "./BottomTabIcons";

let configBottmoTabNavigatorScreen: {
  name: keyof RootTabParamList;
  component: React.ComponentType<any>;
  options?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<RootTabParamList, keyof RootTabParamList>;
        navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined;
}[] = [
  {
    name: "Home",
    component: Home,
    options: {
      tabBarIcon: BottomTabHomeIcon,
    },
  },
  {
    name: "Docs",
    component: Home,
    options: {
      tabBarIcon: BottomTabDocsIcon,
    },
  },
  {
    name: "Search",
    component: Home,
    options: {
      tabBarIcon: BottomTabSearchIcon,
    },
  },
  {
    name: "Notification",
    component: Home,
    options: {
      tabBarIcon: BottomTabNotificationIcon,
    },
  },
  {
    name: "Profile",
    component: Home,
    options: {
      tabBarIcon: BottomTabProfileIcon,
    },
  },
];

const defaultConfigOption:
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<RootTabParamList, keyof RootTabParamList>;
      navigation: any;
    }) => BottomTabNavigationOptions)
  | undefined = {
  headerShown: false,
  tabBarShowLabel: false,
};

configBottmoTabNavigatorScreen = configBottmoTabNavigatorScreen.map((item) => {
  return { ...item, options: { ...item.options, ...defaultConfigOption } };
});

export default configBottmoTabNavigatorScreen;
