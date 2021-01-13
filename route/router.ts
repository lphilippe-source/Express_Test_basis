import express from 'express'

const router = express.Router()

router.use((req,res,next)=>{
    console.log('Time: ', Date.now())
    next()
})
router.use(function (req, res, next) {
    console.log('Method : ' + req.method + ' on Endpoint : ' + req.baseUrl + req.url)
    next()
  })
// router.get('/',(req,res)=>{
//     res.send('Bonjour Philippe!')
//     console.log(req.headers.host+req.baseUrl+req.url)
// })

// Get All orders

router.get('/', function (req, res) {
    // You can find queryStringParameters in req.query
    console.log(req.query)
    res.status(200).send('orders list')
  })
// Put Order by Id
  // router.put('/:id', function (req, res) {
  //     const id = req.params.id
  //     res.status(200).send('Order with id : ' + id + ' updated')
  //   })
  
  // Delete Order bu Id
  router.delete('/:id', function (req, res) {
    res.status(204).send()
  })

export default router