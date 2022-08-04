import { Router } from "express";
import validateToken from "../middlewares/tokenValidator.js";
import { validateUrl } from "../middlewares/urlValidator.js";
import { createShortUrl, getShortUrl } from "../controllers/urlsController.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validateToken, validateUrl, createShortUrl);
urlsRouter.get("/urls/:id", getShortUrl);

export default urlsRouter;
