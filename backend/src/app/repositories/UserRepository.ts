import { ObjectId } from 'mongodb';

import bcrypt from "bcryptjs";


import Database from '../../database'

import { IUser, IUserCreateDTO } from '../interfaces/IUser';

class UserRepository {

	async create(user: IUserCreateDTO) {
		const userCollection = Database.userCollection

		try {
			const userExists = await this.findByEmail(user.email)

			if (!userExists) {

				user.password = bcrypt.hashSync(user.password, 8)

				const userCreated = await userCollection.insertOne(user);

				const newUser: IUser = {
					id: userCreated.insertedId,
					email: user.email,
					username: user.username
				}

				return newUser
			} else {
				return null
			}
		} catch (err) {
			console.log(err);
			return null
		}
	}

	async findAll() {
		const userCollection = Database.userCollection

		try {
			const users = await userCollection.find({}).toArray();
			return users
		} catch (error) {
			return []
		}
	}

	async findById(id: ObjectId | string) {
		const userCollection = Database.userCollection

		try {
			const user = await userCollection.findOne({ _id: new ObjectId(id) })

			return user
		} catch (error) {
			return {}
		}
	}

	async findByEmail(email: string) {
		const userCollection = Database.userCollection

		try {
			const user = await userCollection.findOne({ email })

			return user
		} catch (error) {
			return null
		}
	}

}

export default new UserRepository();
