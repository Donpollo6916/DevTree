import type { Request, Response } from "express"
import { validationResult } from 'express-validator'
import slug from "slug"
import User from "../models/Users"
import { hashPasword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    // Manejo de errores
    let errors = validationResult(req)
    if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    const userExist = await User.findOne({ email })
    if (userExist) {
        const error = new Error("El Usuario con ese mail ya existe")
        return res.status(409).json({ error: error.message })
    }

    const handle = slug(req.body.handle, '')
    const handleExist = await User.findOne({ handle })
    if (handleExist) {
        const error = new Error("Nombre de usuario no disponible")
        return res.status(409).json({ error: error.message })
    }

    const user = new User(req.body)
    user.password = await hashPasword(password)
    user.handle = handle

    await user.save()

    res.status(201).send("Ha sido registrado correctamente")
}