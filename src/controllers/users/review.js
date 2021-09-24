const Reviews = require('../../models/Reviews')

async function createReview(req, res) {
  try {
    const { review, id } = req.body
    const newReview = new Reviews({ review, id })

    const reviewSaved = await newReview.save()
    console.log('nueva review:', reviewSaved)
    res.status(201).json(reviewSaved)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getReview(req, res) {
  try {
    const review = await Reviews.findOne()
    // const profile = await Artist.find()

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
