import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    
    area:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3579D1'
    },

    textChallenge:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        padding: 10,
    },
    textHeader:{
        fontSize: 40,
        marginTop: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 3,
        color: '#fff',
        
    },
    
    areaRandom:{
        marginTop: 20 ,
        backgroundColor: "#f111",
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 20,
        
    },
    
    textRandom:{
        fontSize: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: -20
    },
    button:{
        width: 110,
        height: 50,
        marginTop: 0,
        backgroundColor: '#FF3776',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        color: '#fff',
        
    },
    
})

export {styles}