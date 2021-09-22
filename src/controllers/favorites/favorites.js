const User = require("../../models/User");

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

async function addFavorite(req, res) {
  try {
    const userToken = req.body.user;
    const item = req.body.item;
    const userFound = await User.findOne({ token: userToken });
    if (userFound.favourites.length < 1) {
      userFound.favourites.push(item);
      userFound.save();
    } else {
      let fav = userFound.favourites.concat(item);
      let filter = fav.filter(onlyUnique);
      console.log(userFound.favourites);
      userFound.favourites = filter;
      userFound.save();
    }
    return res.send(userFound.favourites);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

module.exports = {
  addFavorite,
};
