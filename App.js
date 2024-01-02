import React from 'react';
import {  View, Text, StyleSheet  } from "react-native"


export default function App() { 
  return (
    <View style={styles.container}>
        <View style={[styles.Lightgreen, styles.Box, styles.boxShadow, styles.androidShadow]}>
          <Text style={{ borderRadius:10, backgroundColor: "red"}}>LightgreenBox</Text>
        </View>
        <View style={[styles.Lightblue, styles.Box, styles.boxShadow, styles.androidShadow]}>
          <Text>LightblueBox</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "plum", padding: 40},
  Box: {width:250, height: 250, padding: 10, paddingHorizontal: 10, paddingVertical: 20, marginVertical: 10, borderColor: "black", borderWidth: 2, borderRadius: 10},
  Lightgreen: {backgroundColor: "lightgreen"},
  Lightblue: {backgroundColor: "lightblue"},
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  }
});