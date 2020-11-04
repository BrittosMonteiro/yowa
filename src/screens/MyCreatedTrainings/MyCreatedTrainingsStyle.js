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
    training: {
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
    },
    createText: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 22,
        color: '#f6f4eb',
    },
    options: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    createName: {
        fontFamily: 'Rajdhani-Medium',
        fontSize: 22,
        color: '#f6f4eb',
        borderBottomColor: '#fffc',
        borderBottomWidth: 1,
        paddingHorizontal: 2,
        marginBottom: 10,
    },
    btnDefault: {
        backgroundColor: '#970A44',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btnText: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 20,
        color: '#f6f4eb',
    },
    trainingName: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 28,
        color: '#f6f4eb',
    },
})