import { Router } from "express";
import validateToken from "../middlewares/tokenValidator.js";
import { validateUrl } from "../middlewares/urlValidator.js";
import { createShortUrl, getShortUrl, redirectShortUrl, deleteShortUrl } from "../controllers/urlsController.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validateToken, validateUrl, createShortUrl);
urlsRouter.get("/urls/:id", getShortUrl);
urlsRouter.get("/urls/open/:shortUrl", redirectShortUrl);
urlsRouter.delete("/urls/:id", validateToken, deleteShortUrl);

export default urlsRouter;
