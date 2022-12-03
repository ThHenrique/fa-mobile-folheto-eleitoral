import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import UserRepository from "../repositories/UserRepository";

import { IUserCreateDTO } from '../interfaces/IUser';

class UserController {

	async store(req: Request, res: Response) {
		const newUser: IUserCreateDTO = req.body

		const userCreated = await UserRepository.create(newUser)

		if (!userCreated) {
			return res.status(400).json({ error: 'User not created' });
		}

    const token = jwt.sign({ id: userCreated.id }, process.env.SECRET_JWT, { expiresIn: '1d' })

		return res.status(200).json({
			user: userCreated,
			token
		})
	}

	async index(req: Request, res: Response) {

		const usersFound = await UserRepository.findAll();

		return res.json(usersFound);
	}

	async show(req: Request, res: Response) {
		const { email } = req.params;

		const userFound = await UserRepository.findByEmail(email);

		if (!userFound) {
			return res.status(404).json({ error: 'User not found' });
		}

		return res.json(userFound);
	}

}

export default new UserController();
