import React from 'react';
import { View, Image, Text, ScrollView, Button } from "react-native"
const logoImg = require("./assets/logo.png")

export default function App() { 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "plum", padding: 40}}>
      <Button title='Press' onPress={() => alert('Witaj Artur')}
       color="midnightblue" />
    </View>
    
  );
}
