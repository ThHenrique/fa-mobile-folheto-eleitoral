import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  SearchCandidate: undefined;
  CandidateDetails: {id: string; name: string};
  VotingIntention: undefined;
};

export type PropsStack = NativeStackNavigationProp<RootStackParamList>;
