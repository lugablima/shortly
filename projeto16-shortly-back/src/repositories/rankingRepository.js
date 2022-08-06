import connection from "../db/postgres.js";

async function getRanking() {
  return connection.query(
    `SELECT u.id, u.name, COUNT(s."shortUrl")::INTEGER AS "linksCount", COALESCE(SUM(s."visitCount")::INTEGER, '0'::INTEGER) AS "visitCount"  
    FROM users u
    LEFT JOIN "shortUrls" s ON s."userId" = u.id
    GROUP BY u.id
    ORDER BY "visitCount" DESC
    LIMIT 10`
  );
}

export default {
  getRanking,
};
