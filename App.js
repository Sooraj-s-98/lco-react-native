import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const App = () =>{

  return(
    <>
    <View style={[styles.container,{ backgroundColor :"rgb(32,0,126)"}]}>
    <Text>SOORAJ S</Text>
    </View>
    </>
  );
};
export default App;

const styles=StyleSheet.create({
  container :{
    flex : 1,
    alignItems: 'center',
    justifyContent : 'center',
  },
})