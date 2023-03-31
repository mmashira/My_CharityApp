import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

 
  
  
const HomeScreen = ( props ) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Button
          title="Login"
          onPress={() => {
            return props.navigation.navigate('Login');
          }}
        />
      </View>
    );
        }
  ;

export default HomeScreen;