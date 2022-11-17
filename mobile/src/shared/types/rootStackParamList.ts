import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  SearchCandidate: undefined;
  CandidateDetails: undefined;
  VotingIntention: undefined;
};

export type PropsStack = NativeStackNavigationProp<RootStackParamList>;
