import { Router } from "express";
import { traerMuchosUsuarios, traerUsuario } from "../controller/usuarios.controller.js";

const router = Router()

router.get('/traerusuarioss',traerUsuario)
router.get('/muchosusuarios',traerMuchosUsuarios)

export default router