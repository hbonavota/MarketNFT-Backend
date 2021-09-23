const Reviews = require('../../models/Reviews')

async function createReview(req, res) {
  try {
    const { review } = req.body
    const newReview = new Reviews({
      review,
    })
    const reviewSaved = await newReview.save()
    res.status(201).json(reviewSaved.review)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getReview(req, res) {
  try {
    const review = await Reviews.find()
    const profile = await Artist.find()
    console.log('Perfil del usuario: ', profile)
    console.log('ID del perfil', profile._id)
    return res.json(review)
  } catch (error) {
    console.log('No se pudo traer el perfil', error)
    return res.json(error)
  }
}

module.exports = {
  createReview,
  getReview,
}
