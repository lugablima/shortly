import "../setup.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connection from "../db/postgres.js";

const SALT_ROUNDS = 10;
const TIME_15_DAYS = 60 * 60 * 24 * 15;

export async function registerUser(req, res) {
  const { name, email, password } = res.locals.newUser;

  const encryptedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

  try {
    await connection.query(
      `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)`,
      [name, email, encryptedPassword]
    );

    res.sendStatus(201);
  } catch (err) {
    console.log("Error registering new user", err.message);
    res.sendStatus(500);
  }
}

export async function loginUser(req, res) {
  const { id } = res.locals.user;

  try {
    await connection.query(
      `INSERT INTO sessions ("userId")
    VALUES ($1)`,
      [id]
    );

    const {
      rows: [session],
    } = await connection.query(`SELECT * FROM sessions WHERE "userId" = $1`, [id]);

    const data = { sessionId: session.id };

    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: TIME_15_DAYS });

    res.status(200).send(token);
  } catch (err) {
    console.log("Error logging in user", err.message);
    res.sendStatus(500);
  }
}
