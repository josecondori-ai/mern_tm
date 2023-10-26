const mibase=require('../models/modelo')
const mongoose = require('mongoose')









const obtenerDatos=async(req,res)=>{
 const resultado= await mibase.find({})
 res.status(200).json(resultado)
}

const obtenerDato=async(req,res)=>{
    //65312884e540cb2b836e9dd6
 console.log(req.params.id)
 const {id}=req.params
 const resultado=await mibase.findById(id)
 console.log(resultado)
if(!resultado){
    return res.status(404).json({error:'no se encontro la informacion'})
}
res.status(200).json(resultado)
}

const cargarDatos=async(req,res)=>{
    const{nombreApellido,puesto,sueldo}=req.body//destruncturing
        // // console.log(nombreApellido)
        // // const nombreTrabajador=req.body.nombreApellido
        // // console.log(nombreTrabajador)
        let datosVacios=[]

        if(!nombreApellido){
            datosVacios.push('nombreApellido')
        }
        if(!puesto){
            datosVacios.push('puesto')
        }
        if(!sueldo){
            datosVacios.push('sueldo')
        }
        if(datosVacios.length>0){
            console.log(datosVacios)
            return res.status(400).json({error:'Por favor ingrese los datos de los campos ',datosVacios})
        }


        try{
            const resultado=await mibase.create({nombreApellido,puesto,sueldo})
            res.status(200).json(resultado)
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
}

const eliminarDatos=async(req,res)=>{
//65313558ccfe002d92cb68b0
const {id}=req.params
const resultado=await mibase.findOneAndDelete({_id:id})

if(!resultado){
    return res.status(400).json({error:'no se puedo eliminar'})
}

res.status(200).json(resultado)

}

const actualizarDatos=async(req,res)=>{
    const {id}=req.params
    // const {nombreApellido}=req.body

    //65312981d24b68d4088bef3d

    // Chequear esto para proxima clase!!
  const resultado=await mibase.findOneAndUpdate({_id:id},{...req.body})
  res.status(200).json(resultado)
  console.log(resultado)
}


module.exports={
    obtenerDatos,
    obtenerDato,
    cargarDatos,
    eliminarDatos,
    actualizarDatos
}