const Product = require("../../models/Product");
const User= require("../../models/User");

function identifyById(allNfts, ids) {
  var result = []
  ids=ids.join(" ")
  result=allNfts.filter((e) => ids.includes(e._id) )

  return result
}

async function historyPurchase(req, res, next) {
  try {
       const userToken  = req.body.user;  
      const user = await User.findOne({token:userToken})
      let allNfts= await Product.find()
     const result=identifyById(allNfts,user.purchase)
      return res.send(result)
     
     
    } catch (error) {
      next("Error");
      res.json(error);
    }
  }
  
  module.exports = {
    historyPurchase
};