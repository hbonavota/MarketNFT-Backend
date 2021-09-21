const User= require("../../models/User");

async function joinCart(req, res, next) {
    try {
        console.log('REQ.BODY => ', req.body)

        const userCart=await User.findOne({token:req.body.user})
        console.log('USER CART =>' ,userCart)
            if (req.body.cart){
                userCart.shoppingCart=userCart.shoppingCart.concat(req.body.cart)
                function onlyUnique(value, index, self) { 
                return self.indexOf(value) === index;
                }       
            let filter=userCart.shoppingCart.filter(onlyUnique)
            console.log(filter)
            userCart.shoppingCart=filter.filter(e=> e!=null)
            await userCart.save()
            return res.send(userCart.shoppingCart)     

            }
        
    } catch (error) {
        next(error)
    }
}
    module.exports = {
        joinCart
     };
     