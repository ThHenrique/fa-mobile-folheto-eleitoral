import express from 'express'
import cors from 'cors'

import * as dotenv from 'dotenv'
dotenv.config();

import routes from './routes';

import MongoDbClient from './database/index'

const PORT = process.env.PORT || 3333

const app = express();
app.use(express.json());
app.use(
	cors({
		allowedHeaders: ["authorization", "Content-Type"],
		exposedHeaders: ["authorization"],
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false
	})
)

MongoDbClient
	.initialize()
	.then(() => {
		app.use(routes);
	})

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`))
