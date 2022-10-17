import { MongoClient } from "mongodb";

const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST || 'localhost'}`;

export const mongoClient = new MongoClient(uri);
