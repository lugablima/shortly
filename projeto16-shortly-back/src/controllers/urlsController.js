import { customAlphabet } from "nanoid";
import urlsRepository from "../repositories/urlsRepository.js";

const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const SHORT_URL_SIZE = 10;

export async function createShortUrl(req, res) {
  const { userId, url } = res.locals.data;

  const nanoid = customAlphabet(ALPHABET, SHORT_URL_SIZE);

  const shortUrl = nanoid();

  try {
    await urlsRepository.insertShortUrl(userId, shortUrl, url);

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
    } = await urlsRepository.getShortUrlById(id);

    if (!shortUrl) return res.sendStatus(404);

    res.status(200).send(shortUrl);
  } catch (err) {
    console.log("Error getting short url", err.message);
    res.sendStatus(500);
  }
}

export async function redirectShortUrl(req, res) {
  try {
    const { shortUrl } = req.params;

    const {
      rows: [url],
    } = await urlsRepository.getShortUrl(shortUrl);

    if (!url) return res.sendStatus(404);

    await urlsRepository.updateVisitCountOfShortUrl(url.id);

    res.redirect(url.url);
  } catch (err) {
    console.log("Error redirecting user to url", err.message);
    res.sendStatus(500);
  }
}

export async function deleteShortUrl(req, res) {
  const { userId } = res.locals;
  const id = parseInt(req.params.id);

  if (!id) return res.sendStatus(404);

  try {
    const {
      rows: [shortUrl],
    } = await urlsRepository.getAllInfosFromShortUrl(id);

    if (!shortUrl) return res.sendStatus(404);

    if (shortUrl.userId !== userId) return res.sendStatus(401);

    await urlsRepository.deleteShortUrlById(id);

    res.sendStatus(204);
  } catch (err) {
    console.log("Error deleting short url", err.message);
    res.sendStatus(500);
  }
}
