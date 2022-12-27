const express = require('express')

const app = express()
const cors = require('cors')
const dataservice = require('./dataservice')

// app.use(express.json())

app.listen(3000,()=>{
    console.log('server started at port 3000');
})
app.use(cors({
    origin: 'http://localhost:4200'
}))


app.get('/getProducts',(req,res)=>{
    dataservice.getProduct()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
})
app.get('/getMenProduct',(req,res)=>{
    dataservice.getMenProduct()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
})
app.get('/getWomenProduct',(req,res)=>{
    dataservice.getWomenProduct()
    .then((result)=>{
        console.log(result);
        res.send(result)
    })
})

app.get('/viewProduct/:id',(req,res)=>{
    dataservice.viewProduct(req.params.id)
    .then((result)=>{
        console.log('id',result);
        res.send(result)
    })
})

