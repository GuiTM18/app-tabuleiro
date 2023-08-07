import React, {Component} from "react";
import { styles } from './styles';
import {View, Text, Pressable,TouchableOpacity, Image} from 'react-native';
import CronometroApp1 from "./cronometro1";
import CronometroApp2 from "./cronometro2";
import CronometroApp3 from "./cronometro3";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numRandom: 0
    }
  
      this.rodar = this.rodar.bind(this)
  }

  rodar(){
    var NR = Math.floor(Math.random() * 6) + 1
    this.setState({numRandom: NR})
  }
  
  render(){
    return (

      <View style={styles.area}>

        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>Tabuleiro Matemático</Text>
        </View>
        
        <Image source={require('./src/logo.png')} style={{ width: 170, height: 170, margin: 10}} />
        <Text style={styles.textChallenge}> CLIQUE EM GIRAR PRA INICIAR</Text>

        <View style={styles.areaRandom}>
          <Text style={styles.textRandom}>{this.state.numRandom}</Text>
        </View>

        <TouchableOpacity onPress={this.rodar} style={styles.button}>
          <Text style={{fontSize: 30, textAlign: 'center', letterSpacing: 5, color: '#FFF', textTransform: 'uppercase', fontWeight: 'bold'}}>GIRAR</Text>
        </TouchableOpacity>
        
      <CronometroApp1/>
      <CronometroApp2/>
      
        <CronometroApp3  />
     
      
      
      </View>
    )
  }

}

export default App;