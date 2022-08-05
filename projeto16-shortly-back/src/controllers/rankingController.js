import connection from "../db/postgres.js";

async function getRanking(req, res) {
  try {
    const { rows: ranking } = await connection.query(
      `SELECT u.id, u.name, COUNT(s."shortUrl") AS "linksCount", SUM(s."visitCount") AS "visitCount"  
        FROM users u
        JOIN "shortUrls" s ON s."userId" = u.id
        GROUP BY u.id
        ORDER BY "visitCount" DESC
        LIMIT 10`
    );

    res.status(200).send(ranking);
  } catch (err) {
    console.log("Error getting ranking", err.message);
    res.sendStatus(500);
  }
}

export default getRanking;
