import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import Perfil from './src/screens/Profile';
import MyDoneTrainings from './src/screens/MyDoneTrainings';
import MyCreatedTrainings from './src/screens/MyCreatedTrainings';
import CreateTraining from './src/screens/CreateTraining';
import VerifyTraining from './src/screens/VerifyTraining';
import InProgress from './src/screens/InProgressTraining';
import ResumeTraining from './src/screens/ResumeTraining';
import ReviewTraining from './src/screens/ReviewTraining';

const Stack = createStackNavigator();

function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="MyDoneTrainings" component={MyDoneTrainings} />
        <Stack.Screen
          name="MyCreatedTrainings"
          component={MyCreatedTrainings}
        />
        <Stack.Screen name="CreateTraining" component={CreateTraining} />
        <Stack.Screen name="VerifyTraining" component={VerifyTraining} />
        <Stack.Screen name="InProgress" component={InProgress} />
        <Stack.Screen name="Resume" component={ResumeTraining} />
        <Stack.Screen name="Review" component={ReviewTraining} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function App() {
  return <Navegacao />;
}

export default App;
