import Database from '../../database'

class CandidateRepository {

	async findAll() {
		const candidateCollection = Database.db.collection('candidatos2022');

		try {
			const cursor = await candidateCollection.find({}).toArray();
			return cursor
		} catch (error) {
			return []
		}
	}

}

export default new CandidateRepository();
