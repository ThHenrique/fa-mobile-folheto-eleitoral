import { Request, Response } from 'express';

import CandidateRepository from "../repositories/CandidateRepository";

class CandidateController {

	async index(req: Request, res: Response) {

		const candidatesFound = await CandidateRepository.findAll();

		return res.json(candidatesFound);
	}

	async show(req: Request, res: Response) {
		const { name } = req.params;

		const candidateFound = await CandidateRepository.findByName(name);

		if (!candidateFound) {
			return res.status(404).json({ error: 'Candidate not found' });
		}

		return res.json(candidateFound);
	}

	async candidatesByPoliticalParty(req: Request, res: Response) {
		const { politicalParty } = req.params;

		const candidatesFound = await CandidateRepository.findByPoliticalParty(politicalParty)

		if (!candidatesFound) {
			return res.status(404).json({ error: 'Candidate not found' });
		}

		return res.json(candidatesFound);
	}

}

export default new CandidateController();
