import React from 'react';
import { View, StatusBar } from "react-native"


export default function App() { 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "plum", padding: 40}}>
      <StatusBar backgroundColor="lightgreen" barStyle="darck-content"  />
    </View>
  );
}
