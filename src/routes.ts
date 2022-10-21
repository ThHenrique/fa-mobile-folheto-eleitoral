import { Request, Response, Router } from 'express';

import CandidateController from './app/controllers/CandidateController';

class Welcome {
	static getWelcome(req: Request, res: Response) {
		return res.send({ message: "Santinho's API 💼 " })
	}
}

const router = Router();

router.get('/', Welcome.getWelcome);

router.get('/candidates', CandidateController.index);

export default router;