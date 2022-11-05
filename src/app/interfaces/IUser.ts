import { ObjectId } from "mongodb";

import { ICandidate } from "./ICandidate";

export interface IUser {
	id: ObjectId,
	username: string,
	email: string,
	votingIntention?: Array<ICandidate>,
}

export interface IUserCreateDTO {
	username: string,
	email: string,
	password: string,
}
