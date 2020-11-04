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
    trainingList: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
    },
    trainingInformation: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 15,
    },
    trainingName: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 22,
        color: '#f6f4eb',
    },
    trainingDetails: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    trainingInfo: {
        fontFamily: 'Rajdhani-Medium',
        fontSize: 20,
        color: '#f6f4eb',
    }
})