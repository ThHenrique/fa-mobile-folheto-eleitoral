import fs from 'fs'
import csv from 'csv-parser'
import { Writable, Transform } from 'stream'

import * as dotenv from 'dotenv'
dotenv.config();

import Database from '../../database'

import CandidateImage from './CandidateImage'

const readableStreamFile = fs.createReadStream('../../data_csv/candidatos-2022/consulta_cand_2022_SP.csv', {
	encoding: 'latin1',
})
const transformToObject = csv({ separator: ';' })
const transformToString = new Transform({
	objectMode: true,
	transform(chunk, encoding, callback) {
		callback(null, JSON.stringify(chunk))
	},
})

const writableStreamFile = new Writable({
	write(chunk, encoding, next) {
		const stringifyer = chunk.toString()
		const rowData = JSON.parse(stringifyer, (key, value: string) => {
			if (value == '#NULO#' || value == "-1" || value == '#NE#' || value == "-3") {
				value = null
			}
			if (value != null) {
				if (value === 'S' || value === "N") {
					return value === 'S'
				}
			}
			return value
		})
		const candidatos = Database.candidateCollection
		async function handleData(rowData: any) {
			try {
				const candidateImage = await CandidateImage.getImage(rowData.SQ_CANDIDATO)

				rowData.image = candidateImage

				await candidatos.insertOne(rowData)
			} catch (error) {
				console.error(`Candidate ${rowData.SQ_CANDIDATO} NOT ADDED to collection`, error);
			}
		}
		handleData(rowData)
		// console.log('PROCESSANDO', rowData);
		next();
	}
})

console.log('INICIOU', Date());

Database
	.initialize()
	.then(() => {
		readableStreamFile
			.pipe(transformToObject)
			.pipe(transformToString)
			.pipe(writableStreamFile)
			.on('close', async () => {
				console.log('FINALIZOU', Date())
			})
	})
	.catch(() => console.log('Error on conection DB '))



