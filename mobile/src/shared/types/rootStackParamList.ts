import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  SearchCandidate: undefined;
  CandidateDetails: {id: string; name: string};
  VotingIntention: undefined;
  SignIn: undefined;
  SignUp: {email?: string; password?: string} | undefined;
};

export type PropsStack = NativeStackNavigationProp<RootStackParamList>;
