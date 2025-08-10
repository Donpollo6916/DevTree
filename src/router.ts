import { Router } from 'express'
import { IUser } from "./models/Users"

const router = Router();
/**Auteticacion y registro*/
router.post('/auth/register', (req, res) => {
    console.log(req.body);
});

export default router;
