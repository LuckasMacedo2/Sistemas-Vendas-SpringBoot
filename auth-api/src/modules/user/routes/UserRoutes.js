import { Router } from "express";

import UserController from "../controller/userController.js";
import checkToken from "../../../config/auth/checkToken.js";

const router = new Router();

router.post('/api/user/auth', UserController.getAcessToken);

router.use(checkToken); // Daqui pra baixo tem que possuir autenticação
router.get('/api/user/email/:email', UserController.findByEmail);

export default router;