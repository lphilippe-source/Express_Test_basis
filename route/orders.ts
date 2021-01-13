import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Order } from '../model/schema'

const orders = express.Router()

orders.get('/', (req, res, next) => {
    Order.find()
    .then((orders: any) => res.status(200).json(orders))
    .catch((error: any) => res.status(400).json(error))
   })

orders.get('/:id?',(req,res)=>{
    Order.findOne({_id:req.params.id})
    .then((orders: any) => res.status(200).json(orders))
    .catch((error: any) => res.status(400).json(error))
    // console.log(req.params)
})

orders.get('/',(req,res)=>{
    console.log(req.query)
})

orders.post('/',(req,res)=>{
    const arr = [
        {   description:'coucou',
            imageUrl:'toto',
            userId:'caca',
            price:10
          }
      ]
      let id= uuidv4()
    console.log('truc id: ',id)
    // res.status(201).send('order with id: '+id)
      const order = new Order({
          ...req.body
      })
      order.id = id
      order.save()
      .then((orders: any) => res.status(201).json(orders))
      .catch((error: any) => res.status(400).json(error))
      console.log(req.body)
    // Order.insertMany(arr,function(err, result){
    //     if(err){
    //         res.send(err)
    //     } else{
    //         res.send(result)
    //     }
    // })
    // .then(()=>{})
    // .catch((error)=>{res.status(400).json({error})})
})
orders.put('/:id?',(req,res)=>{
    console.log(req.params.id)
    Order.updateOne({_id: req.params.id},{...req.body, _id:req.params.id})
    .then((orders: any) => res.status(201).json(orders))
    .catch((error: any) => res.status(400).json(error))
})
export default orders
