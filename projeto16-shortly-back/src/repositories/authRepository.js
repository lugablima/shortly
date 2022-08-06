import connection from "../db/postgres.js";

async function getUserByEmail(email) {
  return connection.query(
    `SELECT * FROM users 
    WHERE email = $1`,
    [email]
  );
}

async function insertUser(name, email, password) {
  return connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

async function getSessionByUserId(userId) {
  return connection.query(`SELECT * FROM sessions WHERE "userId" = $1`, [userId]);
}

async function insertSession(userId) {
  return connection.query(`INSERT INTO sessions ("userId") VALUES ($1)`, [userId]);
}

export default {
  getUserByEmail,
  insertUser,
  getSessionByUserId,
  insertSession,
};
