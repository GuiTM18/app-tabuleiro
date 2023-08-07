import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const CronometroApp3 = () => {
  const [segundos, setSegundos] = useState(45);
  const [executando, setExecutando] = useState(false);

  useEffect(() => {
    let interval;

    if (executando && segundos > 0) {
      interval = setInterval(() => {
        setSegundos((segundos) => segundos - 1);
      }, 1000);
    } else if (segundos === 0) {
      setExecutando(false);
    }

    return () => clearInterval(interval);
  }, [executando, segundos]);

  const handleIniciarParar = () => {
    setExecutando(!executando);
  };

  const handleZerar = () => {
    setSegundos(45);
    setExecutando(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaRandom}>
        <Text style={styles.textRandom}> Nível:3 {segundos} </Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleIniciarParar}>
        <Text style={styles.textoBotao}>{executando ? 'Parar' : 'Iniciar'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={handleZerar}>
        <Text style={styles.textoBotao}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,

    marginBottom: 222,
    marginLeft: 255,


  },

  botao: {
    backgroundColor: '#FF3776',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textRandom: {
    fontSize: 37,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: -60,
    marginLeft: 7
  },
  areaRandom: {
    marginTop: 20,
    backgroundColor: "#FF5959",
    width: 110,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 20,
  }
});

export default CronometroApp3;