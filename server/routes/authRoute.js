import controllers from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post('/register', controllers.register);
router.post('/login', controllers.login);
router.get('/users/:id/verify/:token', controllers.verifyEmail);

export default router;
