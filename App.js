import React from 'react';
import { View, Text } from "react-native"

export default function App() { 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>
      <Text style={{fontSize: 34}}>
        <Text style={{fontSize: 34, color: "white"}}>Component </Text>Text!
      </Text>
    </View>
  );
}
