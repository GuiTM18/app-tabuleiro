import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const CronometroApp2 = () => {
    const [segundos, setSegundos] = useState(30);
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
        setSegundos(30);
        setExecutando(false);
    };

    return (
        <View style={styles.container1}>
            <View style={styles.areaRandom}>
                <Text style={styles.textRandom}>Nível:2{segundos} </Text>

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

    container1: {
        flex: 1,
        marginTop: -90,

        //  alignItems: 'center',
        //justifyContent: 'center',
    },

    botao: {
        backgroundColor: '#FF3776',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
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
        marginTop: -12,
        marginLeft: 7
    },
    areaRandom: {
        marginTop: 20,
        backgroundColor: "#FF8B59",
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

export default CronometroApp2;