import { Request, Response, Router } from 'express';

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

router.get('/candidate/:name', CandidateController.show);
router.get('/candidates', CandidateController.index);
router.get('/candidates/politicalParty/:politicalParty', CandidateController.candidatesByPoliticalParty);

router.get('/user/:email', UserController.show)
router.get('/users', UserController.index)
router.post('/user', UserController.store)

router.get('/votingIntention/:id', VotingIntentionController.show)
router.get('/votingIntention', VotingIntentionController.index)
router.post('/votingIntention/:userId', VotingIntentionController.store)
router.delete('/votingIntention/:userId/:name', VotingIntentionController.delete)

export default router;
