const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log('Mongodb Connected successfully...');
})
// model
const Product =mongoose.model('Product',{
   
  id: Number,
  title: String,
  price:Number,
  description: String,
  category:String,
    image:String,
    rating:{}
 
})
const Menproduct =mongoose.model('Menproduct',{
   
    id: Number,
    title: String,
    price:Number,
    description: String,
    category:String,
      image:String,
      rating:{}
  })
  const Womenproduct =mongoose.model('Womenproduct',{
   
    id: Number,
    title: String,
    price:Number,
    description: String,
    category:String,
      image:String,
      rating:{}
   
  })
module.exports={
    Product,Menproduct,Womenproduct
}