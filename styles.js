import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    
    area:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3579D1'
    },

    textChallenge:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        padding: 16,
    },
    textHeader:{
        fontSize: 50,
        marginTop: 100,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 3,
        color: '#fff',
        
    },
    
    areaRandom:{
        marginTop: 20 ,
        backgroundColor: "#f111",
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 20,
        
    },
    textRandom:{
        fontSize: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: -12
    },
    button:{
        width: 120,
        height: 50,
        marginTop: 20,
        backgroundColor: '#FF2066',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        color: '#fff',
        
    },
    
})

export {styles}