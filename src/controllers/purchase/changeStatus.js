const Product= require("../../models/Product");

async function changeStatus(req, res, next) {
    try {
      let array=req.body
      array=array.join(" ")
      let nfts= await Product.find()
      nfts=nfts.filter(e=>array.includes(e._id))     
      nfts.map(async (e)=>{
          e.sold=true
        await e.save()})
      let nft=await Product.find()
      nft=nft.filter(e=>e.sold===false)
      return nft;
    } catch (err) {
      console.log(err);
    }
  }
    
  
  module.exports = {
    changeStatus
};