import "../setup.js";
import bcrypt from "bcryptjs";
import connection from "../db/postgres.js";

export async function registerUser(req, res) {
  const { name, email, password } = res.locals.newUser;

  const encryptedPassword = bcrypt.hashSync(password, process.env.BCRYPT_SALT_ROUNDS);

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
  //
}
