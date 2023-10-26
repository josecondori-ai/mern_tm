const mongoose = require('mongoose')

const Schema=mongoose.Schema
const sueldos=new Schema({
    nombreApellido:{
        type:String,
        required:true
    },
    puesto:{
        type:String,
        required:true
    },
    sueldo:{
        type:Number,
        required:true
    }
}
,{
    timestamps:true
})

module.exports=mongoose.model('sueldos',sueldos)