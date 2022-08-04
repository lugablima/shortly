import { newUserSchema } from "../schemas/authSchema.js";
import connection from "../db/postgres.js";

export async function validateNewUser(req, res, next) {
  const newUser = req.body;

  const { error } = newUserSchema.validate(newUser, { abortEarly: false });

  if (error) {
    return res.status(422).send(error.details.map((err) => ({ message: err.message })));
  }

  try {
    const { rowCount: emailAlreadyExists } = await connection.query(
      `SELECT * FROM users 
      WHERE email = $1`,
      [newUser.email]
    );

    if (emailAlreadyExists) return res.sendStatus(409);

    delete newUser.confirmPassword;

    res.locals.newUser = newUser;

    next();
  } catch (err) {
    console.log("Error validating new user", err.message);
    res.sendStatus(500);
  }
}

export async function validateUser(req, res, next) {
  //
}