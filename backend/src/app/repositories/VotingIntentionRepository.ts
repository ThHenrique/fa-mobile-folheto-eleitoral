import { ObjectId } from 'mongodb';

import Database from '../../database'

import UserRepository from './UserRepository';

import { ICandidate } from '../interfaces/ICandidate';
import { IUser } from '../interfaces/IUser';

class VotingIntentionRepository {

	async create(newCandidate: ICandidate, userId: string) {

		const userCollection = Database.userCollection

		try {

			const userFound = await UserRepository.findById(userId) as IUser

			if (!userFound) {
				return null
			}

			const candidateExists = userFound.votingIntention?.find((candidate: ICandidate) => {
				return candidate.NR_CPF_CANDIDATO === newCandidate.NR_CPF_CANDIDATO
			})

			if (candidateExists) {
				return null
			}

			const votingIntentionList = userFound.votingIntention ?? []

			votingIntentionList.push(newCandidate)

			const userVotingIntentionListUpdated = await userCollection.updateOne({ _id: new ObjectId(userId) }, {
				$set: { "votingIntention": votingIntentionList }
			})

			return userVotingIntentionListUpdated.modifiedCount
		} catch (error) {
			return null
		}

	}

	async findAll() {

		try {
			const users = await UserRepository.findAll()

			const votingIntentionList = users.filter((user) => user.votingIntention).flatMap(user => user.votingIntention)

			return votingIntentionList
		} catch (error) {
			return []
		}
	}

	async findByUser(id: string) {
		try {
			const user = await UserRepository.findById(id) as IUser

			return user.votingIntention
		} catch (error) {
			return []
		}
	}

	async delete(userId: string, candidateName: string) {

		const userCollection = Database.userCollection

		try {

			const userFound = await UserRepository.findById(userId) as IUser

			if (!userFound) {
				return null
			}

			const votingListUpdated = userFound.votingIntention?.filter(candidate => {
				return candidate.NM_CANDIDATO !== candidateName
			})

			const listUpdated = await userCollection.updateOne({ _id: new ObjectId(userId) }, {
				$set: { "votingIntention": votingListUpdated }
			})

			return listUpdated.modifiedCount
		} catch (error) {
			return null
		}
	}

}

export default new VotingIntentionRepository();
