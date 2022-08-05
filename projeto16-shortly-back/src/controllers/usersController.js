import connection from "../db/postgres.js";

async function getUser(req, res) {
  const { userId } = res.locals;

  try {
    const {
      rows: [user],
    } = await connection.query(
      `SELECT u.id, u.name, SUM(s."visitCount") AS "visitCount",
      json_agg(json_build_object('id', s.id, 'shortUrl', s."shortUrl", 'url', s.url, 'visitCount', s."visitCount") ORDER BY s.id ASC)
      AS "shortenedUrls"
      FROM "shortUrls" s
      JOIN users u ON s."userId" = u.id
      WHERE u.id = $1
      GROUP BY u.id`,
      [userId]
    );

    if (!user) return res.sendStatus(404);

    res.status(200).send(user);
  } catch (err) {
    console.log("Error getting user data", err.message);
    res.sendStatus(500);
  }
}

export default getUser;

// SELECT u.id, u.name, SUM(s."visitCount") AS "visitCount",
// json_agg(json_build_object('id', s.id, 'shortUrl', s."shortUrl", 'url', s.url, 'visitCount', s."visitCount") ORDER BY s.id ASC)
// AS "shortenedUrls"
// FROM "shortUrls" s
// JOIN users u ON s."userId" = u.id
// WHERE u.id = 1
// GROUP BY u.id;
