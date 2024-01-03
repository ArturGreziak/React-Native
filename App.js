import React from 'react';
import {  View, StyleSheet, Text, Dimensions  } from "react-native";



export default function App() { 
  return (
   
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello Word!</Text>
        </View>
    </View>
  );
}
windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum'
  },
  box: {
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: '#8e9b00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: windowWidth > "500%" ? 50 : 34,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});