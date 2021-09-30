const User= require("../../models/User");
const Product= require("../../models/Product");


function identifyById(allNfts, ids) {
  var result = []
  ids=ids.join(" ")
  result=allNfts.filter((e) => ids.includes(e._id) )
    return result
}

// function onlyUnique(value, index, self) { 
//   return self.indexOf(value) === index;
//  }   



async function purchase (req, res, next) {
  try {
    const userToken  = req.body.user;  
    const cart = req.body.cart
    let user = await User.findOne({token:userToken})
      // let allNfts= await Product.find()
      // user.purchase=user.purchase.concat(cart)
      // let nft = Product.findById(cart[0]);
      // console.log('NFT', nft)
      user.purchase.push(cart);
      user.purchase.flat();
      
      // let filter=cart.filter(onlyUnique )
      // user.purchase=filters
      user.shoppingCart=[] 
      await user.save()
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
     
   