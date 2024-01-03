import React from 'react';
import {  useEffect, useState } from 'react';
import {  View, StyleSheet, Text, Dimensions  } from "react-native";



export default function App() { 
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  });

  const {window} = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  rreturn (
    <View style={styles.container}>
      <View style={[
          styles.box,
          { width: windowWidth > 500 ? "70%" : "90%" },
          { height: windowHeight > 600 ? "60%" : "90%" }
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? "50%" : "34%" }}>Hello World!</Text>
      </View>
    </View>
  );
  
}
// windowWidth = Dimensions.get('window').width;
// windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum'
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: '#8e9b00',
    justifyContent: 'center',
    alignItems: 'center',
  },
   text: {
    // fontSize: windowWidth > "500%" ? 50 : 34,
    fontWeight: 'bold',
    textAlign: 'center',
   }
});