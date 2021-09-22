const User = require("../../models/User");

async function getFav(req, res, next) {
  try {
    const userToken = req.body.user;
    const userFound = await User.findOne({ token: userToken });
    return res.json(userFound.favourites);
  } catch (error) {
    next("Error");
    res.json(error);
  }
}

module.exports = {
  getFav,
};
