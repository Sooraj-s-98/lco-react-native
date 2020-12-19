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
    <Text style={styles.text}>SOORAJ S</Text>
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
  text :{
    fontSize :30,
    backgroundColor: "#BB2CD9",
    paddingHorizontal:40,
    color: "#FFFFFF",
    borderRadius : 15,
    textTransform : "uppercase"
  }
})