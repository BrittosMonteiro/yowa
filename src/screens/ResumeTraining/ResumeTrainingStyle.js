import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#09263D',
    },
    screenTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 15,
        fontFamily: 'Rajdhani-Bold',
        fontSize: 22,
        color: '#f6f4eb',
    },
    tempoArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempo: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 28,
        color: '#f6f4eb',
        marginLeft: 10,
    },
    listaTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'Rajdhani-Medium',
        fontSize: 22,
        color: '#f6f4eb',
    },
    listas: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
    },
    listaItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listaItemNome: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 22,
        color: '#f6f4eb',
    },
    btnDefault: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
    },
    btnText: {
      fontFamily: 'Rajdhani-Bold',
      fontSize: 20,
      color: '#f6f4eb',
      backgroundColor: '#970A44',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
})