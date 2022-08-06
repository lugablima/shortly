import connection from "../db/postgres.js";

async function getUserInfosById(userId) {
  return connection.query(
    `SELECT u.id, u.name, COALESCE(SUM(s."visitCount")::INTEGER, '0'::INTEGER) AS "visitCount",
        CASE 
            WHEN s."userId" IS NOT NULL THEN 
                json_agg(json_build_object('id', s.id, 'shortUrl', s."shortUrl", 'url', s.url, 'visitCount', s."visitCount") ORDER BY s.id ASC)
            ELSE 
                '[]'::json
        END AS "shortenedUrls"
    FROM users u
    LEFT JOIN "shortUrls" s ON s."userId" = u.id
    WHERE u.id = $1
    GROUP BY u.id, s."userId"`,
    [userId]
  );
}

export default {
  getUserInfosById,
};
