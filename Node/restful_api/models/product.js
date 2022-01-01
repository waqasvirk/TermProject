var mongoose = require("mongoose");
const joi = require('@hapi/joi');
const { string } = require("@hapi/joi");

var productsSchema= mongoose.Schema({

name:String,
price:Number,


})

function valditaionProduct(data){


    const Schema= joi.object({
     name: joi.string().min(3).max(10).required(),
     price: joi.number().min(0).required(),

    })
    return Schema.validate(data,{abortEarly:false});
}
var Product = mongoose.model("Book",productsSchema);

module.exports.Product=Product;
module.exports.validate = valditaionProduct;