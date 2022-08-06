import "../setup.js";
import jwt from "jsonwebtoken";
import { getSessionById } from "../repositories/urlsRepository.js";

async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    const session = await getSessionById(data.sessionId);

    res.locals.userId = session.userId;

    next();
  } catch (err) {
    res.sendStatus(401);
  }
}

export default validateToken;
