import React,{useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from "react-native";

import DiceOne from './assets/dice1.png';
import DiceTWO from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
const App = () =>{
  const [uri,setUri]=useState(DiceOne)

  return(
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <TouchableOpacity>
          <Text style={styles.gamePlayButton}>play game</Text>
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
    justifyContent : 'center',
    backgroundColor: "#222831"
  },
  gamePlayButton :{
     fontSize:20,
     marginTop:30,
     color:"#F2A365",
     paddingHorizontal: 40,
     paddingVertical : 10,
     borderColor : "#30475E",
     borderRadius:5,
     borderWidth: 3,
     fontWeight: "bold"
  },
  image :{
     width:200,
     height:200,
  }
})