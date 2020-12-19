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
  const [uri,setUri]=useState(DiceOne);
  const PlayButtonTapped=()=>{
    let randomnumber=Math.floor(Math.random()*6)+1;
    switch(randomnumber){
      case 1:
             setUri(DiceOne);
             break;
      case 2:
             setUri(DiceTwo);
             break;
      case 3:
             setUri(DiceThree);
             break;
      case 4:
             setUri(DiceFour);
             break;
      case 5:
              setUri(DiceFive);
              break;
      case 6:
              setUri(DiceSix);
              break;
      default: setUri(DiceOne)                              
    }
  }

  return(
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <TouchableOpacity onPress={PlayButtonTapped}>
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