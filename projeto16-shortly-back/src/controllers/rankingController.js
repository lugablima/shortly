import rankingRepository from "../repositories/rankingRepository.js";

async function getRanking(req, res) {
  try {
    const { rows: ranking } = await rankingRepository.getRanking();

    res.status(200).send(ranking);
  } catch (err) {
    console.log("Error getting ranking", err.message);
    res.sendStatus(500);
  }
}

export default getRanking;
