import React from 'react';
import { ActivityIndicator, View, Text, Button, Alert  } from "react-native"


export default function App() { 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "plum", padding: 40}}>
        <Button title='Alert' onPress={() => Alert.alert("To jest Alert")} />
        <Button title='Alert2' onPress={() => Alert.alert("To jest Drugi", "Alert 2")} />
        <Button title='Alert3' onPress={() => Alert.alert("To jest Alert", "Alert3", [
          {
            text: "Cancel",
            onPress: () => alert("Cancel Press")
          },
          {
            text: "Ok",
            onPress: () => alert("Cancel Press")
          }
        ])} />
    </View>
  );
}
