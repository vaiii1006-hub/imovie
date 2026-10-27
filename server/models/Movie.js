const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({ title:{type:String,required:true,index:true}, genre:String, language:String, duration:String, rating:Number, poster:String, description:String, releaseYear:Number, active:{type:Boolean,default:true} }, {timestamps:true});
module.exports = mongoose.model('Movie', movieSchema);
