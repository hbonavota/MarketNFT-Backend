const User = require("../../models/User");

async function deleteFav(req, res, next) {
  try {
    const item = req.body.item;
    const userToken = req.body.user;
    const userFound = await User.findOne({ token: userToken });
    let fav = userFound.favourites.filter((e) => {
      if (e != item) return e;
    });
    userFound.favourites = fav;
    userFound.save();
    return res.json(userFound.favourites);
  } catch (error) {
    next("Error");
    res.json(error);
  }
}

module.exports = {
  deleteFav,
};
