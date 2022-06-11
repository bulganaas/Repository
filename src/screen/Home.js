import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function HomeScreen({navigation}) {
      
    const clickBtn = () => {
       navigation.navigate('Login')
    }
    return ( 
        <View>
            <Text style={css.text}>Home Page screen</Text>
            <Button title="onClick" onPress={clickBtn}/>
        </View>
     );
}

export default HomeScreen;


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
