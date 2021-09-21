const Artist = require("../../models/Artist");


async function createProfile(req, res) {
  try {
    const { name, description, image } = req.body;


    const newProfile = new Artist({
        name,
        description,
        image,
    });

    const profileSaved = await newProfile.save();
    res.status(201).json(profileSaved);

  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

async function getProfile(req, res) {
    const { token } = req.params;
    try {
        const profile = await Artist.findOne({token})
        console.log("perfil desde la cookie", profile)
        return res.json(profile)

    } catch(error) {
        console.log("No se pudo traer el perfil", error)
        return res.json(error)
    }
}


async function updatedProfileById(req, res, next) {
  const id = req.params.id;
  const { name, description, image } = req.body;

  try {
    await Artist.findByIdAndUpdate(id, name, description, image);

    res.json("Profile updated");
    
  } catch (error) {
    next("error");
    res.json("fail edit profile");
  }
}


module.exports = {
    createProfile,
    getProfile,
    updatedProfileById,
};
