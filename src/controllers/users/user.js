const User = require("../../models/User");


async function updatedProfileById(req, res, next) {
  try {
    const { artist, description, profilePic } = req.body;
    const { token } = req.params;
    let profileUser = await User.findOne({token})
    profileUser.artist = artist;
    profileUser.description = description;
    profileUser.profilePic = profilePic;
    await profileUser.save();
    res.json(profileUser);
    
  } catch (error) {
    next("error");
    res.json("fail edit profile");
  }
}


async function getProfile(req, res) {
    const { token } = req.params;
    try {
        const profile = await User.findOne({token})

        return res.json(profile)

    } catch(error) {
        console.log("No se pudo traer el perfil", error)
        return res.json(error)
    }
}


module.exports = {
    getProfile,
    updatedProfileById,
};
