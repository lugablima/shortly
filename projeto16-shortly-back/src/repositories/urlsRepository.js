import connection from "../db/postgres.js";

export async function getSessionById(sessionId) {
  const {
    rows: [session],
  } = await connection.query(`SELECT * FROM sessions WHERE id = $1`, [sessionId]);

  return session;
}

export async function insertNewShortUrl(userId, shortUrl, url) {
  await connection.query(`INSERT INTO "shortUrls" ("userId", "shortUrl", url) VALUES ($1, $2, $3)`, [userId, shortUrl, url]);
}

export async function getShortUrlById(shortUrlId) {
  const {
    rows: [shortUrl],
  } = await connection.query(
    `SELECT id, "shortUrl", url FROM "shortUrls"
        WHERE id = $1`,
    [shortUrlId]
  );

  return shortUrl;
}
