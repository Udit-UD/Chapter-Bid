import controllers from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post('/register', controllers.register);
router.post('/login', controllers.login);
router.get('/verify/:userId', controllers.verifyEmail); 

export default router;
