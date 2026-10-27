const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({ userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}, movieId:{type:mongoose.Schema.Types.ObjectId,ref:'Movie',required:true}, showTime:{type:String,required:true}, showDate:{type:String,required:true}, seats:{type:[String],required:true}, total:Number, status:{type:String,enum:['confirmed','cancelled'],default:'confirmed'}, bookingCode:{type:String,required:true,unique:true} }, {timestamps:true});
module.exports = mongoose.model('Booking', bookingSchema);
