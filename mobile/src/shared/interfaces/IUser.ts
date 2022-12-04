import {ICandidate} from './ICandidate';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  votingIntention?: Array<ICandidate>;
}

export interface IUserCreateDTO {
  username: string;
  email: string;
  password: string;
}

export interface IUserAuthenticated {
  user: IUser;
  token: string;
}
