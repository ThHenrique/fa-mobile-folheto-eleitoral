import { Request, Response, Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import AuthController from './app/controllers/AuthController';
import CandidateController from './app/controllers/CandidateController';
import UserController from './app/controllers/UserController';
import VotingIntentionController from './app/controllers/VotingIntentionController';

class Welcome {
	static getWelcome(req: Request, res: Response) {
		return res.send({ message: "Santinho's API 💼 " })
	}
}

const router = Router();

router.get('/', Welcome.getWelcome);

router.post('/authenticate', AuthController.authenticate);

router.get('/candidate/:name', CandidateController.show);
router.get('/candidates', CandidateController.index);
router.get('/candidates/politicalParty/:politicalParty', CandidateController.candidatesByPoliticalParty);

router.get('/user/:email', UserController.show)
router.get('/users', UserController.index)
router.post('/user', UserController.store)

router.get('/votingIntention', authMiddleware, VotingIntentionController.show)
router.post('/votingIntention/:candidateId', authMiddleware, VotingIntentionController.store)
router.delete('/votingIntention/:candidateId', authMiddleware, VotingIntentionController.delete)

export default router;
