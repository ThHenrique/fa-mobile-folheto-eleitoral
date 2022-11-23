import {readdir} from 'fs'
import {readFile} from 'fs/promises'

import {extname} from 'path'

import { ICandidateImage } from '../../app/interfaces/ICandidateImage'

class CandidateImage {

	async getImage(candidateId:string): Promise<ICandidateImage | null> {
		const pathToCandidatesImages = "../../data_csv/foto_cand2022_SP_div/"

		return new Promise((resolve, reject) => {
			readdir(pathToCandidatesImages, async (err, files) => {
				if (err) {
					reject(err.message)
				} else {
					const filename = files.find(file => file.includes(candidateId))

					if (!filename) {
						console.error(`Candidate ${candidateId} IMAGE NOT FOUND!`);
						resolve(null)
					} else {
						const fileExtension = extname(filename).replace(".","")
						const fileInBase64 = await readFile(`${pathToCandidatesImages}/${filename}`, {encoding: 'base64'})

						resolve({
							filename,
							base64: fileInBase64,
							extension: fileExtension
						})
					}
				}
			})
		})
	}
}

export default new CandidateImage();
