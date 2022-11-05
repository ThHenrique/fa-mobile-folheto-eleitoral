import { Request, Response } from 'express';

import VotingIntentionRepository from "../repositories/VotingIntentionRepository";

import { ICandidate } from '../interfaces/ICandidate';

class VotingIntentionController {

	async store(req: Request, res: Response) {
		const newCandidate: ICandidate = req.body

		const { userId } = req.params

		const result = await VotingIntentionRepository.create(newCandidate, userId)
		console.log(result);

		if (!result) {
			return res.status(400).json({ error: 'Candidate not added to voting intention' });
		}

		return res.sendStatus(200)
	}

	async index(req: Request, res: Response) {

		const votingIntentionList = await VotingIntentionRepository.findAll();

		return res.json(votingIntentionList);
	}

	async show(req: Request, res: Response) {
		const { id } = req.params;

		const votingIntentionFound = await VotingIntentionRepository.findByUser(id);

		if (!votingIntentionFound) {
			return res.status(404).json({ error: 'User or voting intention list not found' });
		}

		return res.json(votingIntentionFound);
	}

	async delete(req: Request, res: Response) {
		const { name, userId } = req.params

		const votingIntentionRemoved = await VotingIntentionRepository.delete(userId, name)

		if (!votingIntentionRemoved) {
			return res.status(404).json({ error: 'User not found' });
		}

		return res.sendStatus(200)
	}

}

export default new VotingIntentionController();
