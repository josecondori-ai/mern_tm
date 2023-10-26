const express = require('express')
const mongoose = require('mongoose')

const misrutas=require('./routes/rutas')

const app = express()

app.use(express.json())

app.use('/miapi/pepe',misrutas)

mongoose.connect('mongodb+srv://joselcondori:lXYs1pxtMz32UkOO@cluster0.tiraw6w.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('se conecto a la base de datos')
    app.listen(3500,()=>{
        console.log('se conecto al servidor')
    })
})
.catch((error)=>{
    console.log(error)
})
