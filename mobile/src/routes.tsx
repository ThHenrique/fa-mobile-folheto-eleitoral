import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchCandidate} from './pages/SearchCanditate';

import {Splash} from './pages/Splash';
import {CandidateDetails} from './pages/CandidateDetails';
import {VotingIntention} from './pages/VotingIntention';

import {RootStackParamList} from './shared/types/rootStackParamList';
import {SignIn} from './pages/SignIn';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: '#f1f1f1'},
        }}>
        <Screen name="Splash" component={Splash} />
        <Screen name="SearchCandidate" component={SearchCandidate} />
        <Screen name="CandidateDetails" component={CandidateDetails} />
        <Screen name="VotingIntention" component={VotingIntention} />
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
}
