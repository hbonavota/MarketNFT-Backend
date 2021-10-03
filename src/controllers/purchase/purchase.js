const User= require("../../models/User");
const Product= require("../../models/Product");


function identifyById(allNfts, ids) {
  var result = []
  ids=ids.join(" ")
  result=allNfts.filter((e) => ids.includes(e._id) )
    return result
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
 }   



async function purchase (req, res, next) {
  try {
    const userToken  = req.body.user;  
    const cart = req.body.cart
    let user = await User.findOne({token:userToken})
    let allNfts = await Product.find()
    user.purchase=user.purchase.concat(cart)
    user.purchase=user.purchase.filter(onlyUnique)
    const filter = { token: userToken }
    const update = { purchase: user.purchase, shoppingCart : Object.assign([]) }
    await User.findOneAndUpdate(filter, update, { new: true })
    const result=identifyById(allNfts,user.purchase )
    return res.send(result)
    } catch (error) {
      next("Error Purchase");
      res.json(error);
    }
  }
  


  
  module.exports = {
    purchase
};
     
   