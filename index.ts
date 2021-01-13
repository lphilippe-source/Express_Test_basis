import express from 'express'
import mongoose  from 'mongoose'
import router from './route/router'
import orders from './route/orders'
import bodyParser from 'body-parser'
require('dotenv').config()

const app = express()
const port = 3000
const USER = process.env.DB_USER
const PASS = process.env.DB_PASS

mongoose.connect('mongodb+srv://'+USER+':'+PASS+'@cluster0.wg6hk.mongodb.net/orders?retryWrites=true&w=majority',
 {
   useNewUrlParser: true,
  useUnifiedTopology:true
})
.then(()=>{
  console.log('connexion à Mongo réussi')
})
.catch(()=>{
  console.log('connexion à Mongo échoué')
})

app.use(bodyParser.urlencoded( {extended:true}))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
  next()
})

app.use('/',router)

app.use('/orders',orders)

app.use('*',(req,res)=>{
  res.status(404).send('erroR 404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



