import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#09263D',
  },
  topOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
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
  screenTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 22,
    color: '#f6f4eb',
  },
  exercises: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  exercisesArea: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 15,
  },
  exercisesName: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  exercisesText: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 22,
    color: '#f6f4eb',
  },
  exerciseDescription: {
    fontFamily: 'Rajdhani-Medium',
    fontSize: 20,
    color: '#f6f4eb',
    padding: 0,
  },
});
