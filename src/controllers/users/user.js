const User = require("../../models/User");


async function updatedProfileById(req, res, next) {
  try {
    const { artist, description, profilePic, address} = req.body;
    const { token } = req.params;
      console.log(req.body)
      console.log(token)
    let profileUser = await User.findOne({token})
    profileUser.artist = artist;
    profileUser.description = description;
    profileUser.profilePic = profilePic;
    profileUser.address= address;
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

        console.log("perfil desde la cookie", profile)
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
