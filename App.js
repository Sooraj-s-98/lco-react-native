import React, {useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const App = () =>{

  const [randomColor,setRandomColor]=useState("rgb(32,0,126)");
  
  const resetBG=()=>{
    setRandomColor("rgb(0,0,0)");
  };
  const changeBG=()=>{

    let color="rgb("+
      Math.floor(Math.random()*256) +
      ','+
      Math.floor(Math.random()*256) +
      ','+
      Math.floor(Math.random()*256) +
      ')';
      setRandomColor(color);
   };
  return(
    <>
    <View style={[styles.container,{ backgroundColor : randomColor}]}>
      <TouchableOpacity onPress={changeBG}>
        <Text style={styles.text}>TAP ME</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetBG}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};
export default App;

const styles=StyleSheet.create({
  container :{
    flex : 1,
    alignItems: 'center',
    justifyContent : 'space-evenly',
  },
  text :{
    fontSize :30,
    backgroundColor: "#BB2CD9",
    paddingHorizontal:40,
    color: "#FFFFFF",
    borderRadius : 15,
    textTransform : "uppercase"
  },
  reset :{
    fontSize :20,
    backgroundColor: "#FFFFFF",
    paddingVertical:2,
    paddingHorizontal:10,
    color: "#000000",
    borderRadius : 10,
    textTransform : "uppercase"
  }
})