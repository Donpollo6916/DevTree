import { Router } from 'express';
import { body } from 'express-validator'
import { createAccount } from './handlers';

const router = Router();
/**Auteticacion y registro*/
router.post('/auth/register',
    body('handler')
        .notEmpty()
        .withMessage("El handler no puede ir vacio"),
    body('name')
        .notEmpty()
        .withMessage("El nombre no puede ir vacio"),
    body('mail')
        .isEmail()
        .withMessage("E-mail no valido"),
    body('password')
        .isLength({ min: 8 })
        .withMessage("Contraseña muy corta "),
    createAccount)

export default router;
