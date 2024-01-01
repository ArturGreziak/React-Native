import React from 'react';
import { View, Image, Text } from "react-native"
const logoImg = require("./assets/logo.png")

export default function App() { 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "blue"}}>
      <Image source={{ uri: "https://picsum.photos/300"}} style={{ width: 300, height: 300}} />
      <Image source={logoImg} style={{ width: 300, height: 300}} />
      <Text>Cmponent Image</Text>
    </View>
  );
}
