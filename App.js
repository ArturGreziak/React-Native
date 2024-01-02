import React from 'react';
import {  View, Text, StyleSheet  } from "react-native"


export default function App() { 
  return (
    <View style={styles.container}>
        <View style={[styles.Lightgreen, styles.Box]}>
          <Text style={{ borderRadius:10, backgroundColor: "red"}}>LightgreenBox</Text>
        </View>
        <View style={[styles.Lightblue, styles.Box]}>
          <Text>LightblueBox</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "plum", padding: 40},
  Box: {width:100, height: 100, padding: 10, paddingHorizontal: 10, paddingVertical: 20, marginVertical: 10, borderColor: "black", borderWidth: 2, borderRadius: 10},
  Lightgreen: {backgroundColor: "lightgreen"},
  Lightblue: {backgroundColor: "lightblue"}
});