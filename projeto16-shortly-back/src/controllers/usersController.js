import usersRepository from "../repositories/usersRepository.js";

async function getUser(req, res) {
  const { userId } = res.locals;

  try {
    const {
      rows: [user],
    } = await usersRepository.getUserInfosById(userId);

    if (!user) return res.sendStatus(404);

    res.status(200).send(user);
  } catch (err) {
    console.log("Error getting user data", err.message);
    res.sendStatus(500);
  }
}

export default getUser;

// SELECT u.id, u.name, COALESCE(SUM(s."visitCount"), 0) AS "visitCount",
// 	CASE
// 		WHEN s."userId" IS NOT NULL THEN
// 			json_agg(json_build_object('id', s.id, 'shortUrl', s."shortUrl", 'url', s.url, 'visitCount', s."visitCount") ORDER BY s.id ASC)
// 		ELSE
// 			'[]'::json
// 	END AS "shortenedUrls"
// FROM users u
// LEFT JOIN "shortUrls" s ON s."userId" = u.id
// WHERE u.id = 3
// GROUP BY u.id, s."userId";
