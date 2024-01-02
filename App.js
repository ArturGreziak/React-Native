import React from 'react';
import { ActivityIndicator, View, Text, Button, Alert  } from "react-native"
import Greet from './components/Greet';


export default function App() { 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "plum", padding: 40}}>
        <Greet name="Bruce Wayne" />
        <Greet name="Clark Kent" />
    </View>
  );
}
