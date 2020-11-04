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
    imgArea: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 15,
        alignItems: 'center',
    },
    profileImg: {
        marginVertical: 15,
    },
    btnAlterarImg: {
        backgroundColor: '#970A44',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    btnTxt: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 20,
        color: '#f6f4eb',
    },
    informationArea: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    informationLabel: {
        fontFamily: 'Rajdhani-Medium',
        fontSize: 20,
        color: '#f6f4eb',
        marginBottom: 5,
    },
    informationText: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 22,
        color: '#f6f4eb',
    },
    btnArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    alert: {
        paddingHorizontal: 15,
        marginBottom: 30,
        fontFamily: 'Rajdhani-Regular',
        fontSize: 16,
        color: '#fffc',
    }
})