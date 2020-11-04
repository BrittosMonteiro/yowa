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
    topInformation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    informationBlock: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '35%',
        marginVertical: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blockTitle: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 20,
        color: '#f6f4eb',
    },
    blockInformation: {
        fontFamily: 'Rajdhani-Medium',
        fontSize: 20,
        color: '#f6f4eb',
    },

    training: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 15,
    },
    trainingItem: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 15,
    },
    trainingTitle: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 20,
        color: '#f6f4eb',
        marginBottom: 5,
    },
    trainingLarge: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    trainingPlaceAndDate: {
        fontFamily: 'Rajdhani-Medium',
        fontSize: 20,
        color: '#f6f4eb',
    },
    trainingTasks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    trainingTask: {
        fontFamily: 'Rajdhani-Medium',
        fontSize: 20,
        color: '#f6f4eb',
        marginLeft: 10,
    }
})