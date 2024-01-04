import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';
import CustomButton from './Buttony/CustomButton/';

export default function App() {
  const title = 'Hello, World!';

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>{title}</Text>
          <CustomButton title='Press' onPress={() => alert('Witaj')}  />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    alignItems: 'flex-start',
  },
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: 'blue',
      },
      android: {
        fontFamily: 'monospace',
        fontSize: 24,
        color: 'green',
      },
    }),
    textAlign: 'center',
    marginBottom: 20,
  },
});
