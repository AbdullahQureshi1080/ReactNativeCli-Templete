/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const App = () => {

  const buttonPressed = (msg) => {
    alert("Message: " + msg);
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Text}>Welcome to RN CLI</Text>
      <Text style={styles.Text}>Hello from RN CLI</Text>
      <View style={styles.subContainer}>
        <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Button 1" onPress={buttonPressed.bind(this, "Hi from Button 1")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Button 2" onPress={buttonPressed.bind(this, "Hi from Button 2")} />
        </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    fontSize:30,
    backgroundColor:"crimson",
  },
  Text: {
    color:"white",
  },
  subContainer:{
     fontSize:30,
     display:"flex",
     flexDirection:"row",
  },
  buttonContainer:{
    padding:10,
  },
  button:{
    backgroundColor:"crimson",
    width:50,
    height:50,
  },
});



export default App;