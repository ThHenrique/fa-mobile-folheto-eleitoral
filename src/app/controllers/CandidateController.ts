import { Request, Response } from 'express';

import CandidateRepository from "../repositories/CandidateRepository";

class CandidateController {

	async index(req: Request, res: Response) {

		const candidatesFound = await CandidateRepository.findAll();

		return res.json(candidatesFound);
	}

}

export default new CandidateController();
