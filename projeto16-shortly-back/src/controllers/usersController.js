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
