import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/login";
import HomeScreen from "./src/Screens/HomeScreen";
import SignUp from "./src/SignUp";


const stack = createStackNavigator();

function MyCharityApp() {
  return (
    <NavigationContainer>
      <stack.Navigator>

        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Category" component={Category} />
        <stack.Screen name="DonationForm" component={DonationForm} />
     
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default MyCharityApp;
