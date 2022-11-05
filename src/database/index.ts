import { Db, MongoClient } from "mongodb";

const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST || 'localhost'}`;

class MongoDbClient {
	private mongoClient: MongoClient;
	private db: Db;

	constructor() {
		this.mongoClient = new MongoClient(uri)
	}

	async initialize() {
		try {
			const connection = await this.mongoClient.connect()

			this.db = connection.db(process.env.DB_NAME)

			console.log(`Successfully connected to database: ${this.db.databaseName}`);
		} catch (error) {
			console.log(error);

			console.log(`Error during connection to database`);
		}
	}

	public get candidateCollection() {
		return this.db.collection('candidatos2022');
	}

	public get userCollection() {
		return this.db.collection('users');
	}

}

export default new MongoDbClient();
