import { Router } from 'express'
// Routing 
// Request significa aquella peticion que estamos realizando (envia)
// Response significa lo que ofrece la aplicacion es la respuesta que esta  dando la aplicacion (respuesta)

const router = Router();
/**Auteticacion y registro*/
router.post('/auth/register', (req, res) => {
    console.log(req.body);
});

export default router;
