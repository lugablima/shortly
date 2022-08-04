import { customAlphabet } from "nanoid";
import connection from "../db/postgres.js";

const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const SHORT_URL_SIZE = 10;

export async function createShortUrl(req, res) {
  const { userId, url } = res.locals.data;

  const nanoid = customAlphabet(ALPHABET, SHORT_URL_SIZE);

  const shortUrl = nanoid();

  try {
    await connection.query(`INSERT INTO "shortUrls" ("userId", "shortUrl", url) VALUES ($1, $2, $3)`, [userId, shortUrl, url]);

    res.status(201).send({ shortUrl });
  } catch (err) {
    console.log("Error creating short url", err.message);
    res.sendStatus(500);
  }
}

export async function getShortUrl(req, res) {
  const id = parseInt(req.params.id);

  if (!id) return res.sendStatus(404);

  try {
    const {
      rows: [shortUrl],
    } = await connection.query(
      `SELECT id, "shortUrl", url FROM "shortUrls"
    WHERE id = $1`,
      [id]
    );

    if (!shortUrl) return res.sendStatus(404);

    res.status(200).send(shortUrl);
  } catch (err) {
    console.log("Error getting short url", err.message);
    res.sendStatus(500);
  }
}
