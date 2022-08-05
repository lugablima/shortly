import { Router } from "express";
import validateToken from "../middlewares/tokenValidator.js";
import getUser from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/users/me", validateToken, getUser);

export default usersRouter;
