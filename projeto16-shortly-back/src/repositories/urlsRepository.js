import connection from "../db/postgres.js";

async function deleteShortUrlById(shortId) {
  return connection.query(`DELETE FROM "shortUrls" WHERE id = $1`, [shortId]);
}

async function getAllInfosFromShortUrl(shortId) {
  return connection.query(`SELECT * FROM "shortUrls" WHERE id = $1`, [shortId]);
}

async function getSessionById(sessionId) {
  return connection.query(`SELECT * FROM sessions WHERE id = $1`, [sessionId]);
}

async function getShortUrl(shortUrl) {
  return connection.query(`SELECT * FROM "shortUrls" WHERE "shortUrl" = $1`, [shortUrl]);
}

async function getShortUrlById(shortUrlId) {
  return connection.query(
    `SELECT id, "shortUrl", url FROM "shortUrls"
    WHERE id = $1`,
    [shortUrlId]
  );
}

async function insertShortUrl(userId, shortUrl, url) {
  return connection.query(`INSERT INTO "shortUrls" ("userId", "shortUrl", url) VALUES ($1, $2, $3)`, [userId, shortUrl, url]);
}

async function updateVisitCountOfShortUrl(shortId) {
  return connection.query(
    `UPDATE "shortUrls" SET "visitCount" = "visitCount" + 1 
    WHERE id = $1`,
    [shortId]
  );
}

export default {
  deleteShortUrlById,
  getAllInfosFromShortUrl,
  getSessionById,
  getShortUrl,
  getShortUrlById,
  insertShortUrl,
  updateVisitCountOfShortUrl,
};
