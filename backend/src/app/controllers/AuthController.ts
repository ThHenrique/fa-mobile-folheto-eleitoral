import { Request, Response } from 'express';

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

import UserRepository from '../repositories/UserRepository';

class AuthController {

	async authenticate(req: Request, res: Response) {
		const {email, password} = req.body

		const user = await UserRepository.findByEmail(email)

    if (!user) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, { expiresIn: '1d' })

    delete user.password;

    res.statusCode = 200
    return res.json({
      user,
      token
    })
	}

}

export default new AuthController();
