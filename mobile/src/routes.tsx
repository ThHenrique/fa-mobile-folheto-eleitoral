import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {CandidateDetails} from './pages/CandidateDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchCandidate} from './pages/SearchCanditate';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/Auth/SignUp';
import {Splash} from './pages/Splash';
import {VotingIntention} from './pages/VotingIntention';

import {RootStackParamList} from './shared/types/rootStackParamList';
import CustomDrawer from './shared/components/CustomDrawer';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: '#f1f1f1'},
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={DrawerNavigatorRoutes} />
        <Stack.Screen name="CandidateDetails" component={CandidateDetails} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function DrawerNavigatorRoutes() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="SearchCandidate"
        component={SearchCandidate}
        options={{title: 'Página inicial', headerShown: false}}
      />
      <Drawer.Screen
        name="VotingIntention"
        component={VotingIntention}
        options={{title: 'Intenção de voto', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
