import { Router } from "express";
import { validateNewUser, validateUser } from "../middlewares/userValidator.js";
import { registerUser, loginUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateNewUser, registerUser);
authRouter.post("/signin", validateUser, loginUser);

export default authRouter;
