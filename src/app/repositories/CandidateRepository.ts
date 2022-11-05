import Database from '../../database'

class CandidateRepository {

	async findAll() {
		const candidateCollection = Database.candidateCollection

		try {
			const cursor = await candidateCollection.find({
				DS_CARGO: "GOVERNADOR",
				SG_UE: "SP"
			}).toArray();
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
				DS_CARGO: "GOVERNADOR",
				SG_UE: "SP"
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
				$or: [
					{ NM_PARTIDO: politicalParty, DS_CARGO: "GOVERNADOR", SG_UE: "SP" },
					{ SG_PARTIDO: politicalParty, DS_CARGO: "GOVERNADOR", SG_UE: "SP" }
				]

			}).toArray()

			return candidate
		} catch (error) {
			return {}
		}
	}

}

export default new CandidateRepository();
