
// const mongoose = require('mongoose')
import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    description:{type: String,require:true},
    imageUrl:{type: String,require:true},
    userId:{type: String,require:true},
    price:{type: Number,require:true}
  })
  export const Order =  mongoose.model('Order',orderSchema)

// const UserModel = 

