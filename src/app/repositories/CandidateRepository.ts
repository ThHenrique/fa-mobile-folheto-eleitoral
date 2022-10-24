import Database from '../../database'

class CandidateRepository {

	async findAll() {
		const candidateCollection = Database.candidateCollection

		try {
			const cursor = await candidateCollection.find({}).toArray();
			return cursor
		} catch (error) {
			return []
		}
	}

	async findByName(name: string) {
		const candidateCollection = Database.candidateCollection

		try {
			const candidate = await candidateCollection.findOne({
				NM_CANDIDATO: name,
			})

			return candidate
		} catch (error) {
			return {}
		}
	}

	async findByPoliticalParty(politicalParty: string) {
		const candidateCollection = Database.candidateCollection

		try {
			const candidate = await candidateCollection.find({
				NM_PARTIDO: politicalParty,
			}).toArray()

			return candidate
		} catch (error) {
			return {}
		}
	}

}

export default new CandidateRepository();
