const User= require("../../models/User");

async function historyPurchase(req, res, next) {
    try {
      const userToken  = req.body.user;  
      const user = await User.findOne({token:userToken})
      return res.send(user.purchase)
     
    } catch (error) {
      next("Error");
      res.json(error);
    }
  }
  
  module.exports = {
    historyPurchase
};