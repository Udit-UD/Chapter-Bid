import {register,login} from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get('/users/:id/verify/:token', controllers.verifyEmail);

export default router;
