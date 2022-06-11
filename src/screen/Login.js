import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function LoginScreen() {
    return ( 
        <View>
            <Text style={css.text}>Login Page screen</Text>
        </View>
     );
}

export default LoginScreen;


const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 50,
      // backgroundColor: 'yellow',
      // borderWidth: 5,
      // borderColor: 'grey'
    },
    btn: {
      fontSize: 50,
      // backgroundColor: 'black'
    }
  });
