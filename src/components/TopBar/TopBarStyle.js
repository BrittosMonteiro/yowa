import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    bar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        backgroundColor: '#970A44',
        position: 'relative',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    barTitle: {
        fontSize: 28,
        fontFamily: 'Rajdhani-Bold',
        color: '#F6F4EB',
    },
    barImg: {
        width: 50,
        height: 50,
    }
})