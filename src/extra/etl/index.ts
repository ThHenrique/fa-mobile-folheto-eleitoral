import fs from 'fs'
import csv from 'csv-parser'
import { Writable, Transform } from 'stream'

import Database from '../../database'

const readableStreamFile = fs.createReadStream('../data_csv/candidatos-2022/consulta_cand_2022_SP.csv', {
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
		const candidatos = Database.db.collection('candidatos2022')
		async function handleData(rowData: any) {
			try {
				await candidatos.insertOne(rowData)
			} catch (error) {
				console.log(error);
			}
		}
		handleData(rowData)
		// console.log('PROCESSANDO', rowData);
		next();
	}
})

console.log('INICIOU', Date());

readableStreamFile
	.pipe(transformToObject)
	.pipe(transformToString)
	.pipe(writableStreamFile)
	.on('close', async () => {
		console.log('FINALIZOU', Date())
	})

