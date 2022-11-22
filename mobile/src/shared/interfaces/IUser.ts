import {ICandidate} from './ICandidate';

export interface IUser {
  id: string;
  username: string;
  email: string;
  votingIntention?: Array<ICandidate>;
}

export interface IUserCreateDTO {
  username: string;
  email: string;
  password: string;
}

export interface IUserAuthenticated extends IUser {
  token: string;
}
