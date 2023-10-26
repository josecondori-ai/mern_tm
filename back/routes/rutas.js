const express = require('express')
const  router=express.Router()

const {
    obtenerDatos,
    obtenerDato,
    cargarDatos,
    eliminarDatos,
    actualizarDatos
} = require('../controllers/controladores')


router.get('/',obtenerDatos)



router.get('/:id',obtenerDato)
router.post('/',cargarDatos)
router.delete('/:id',eliminarDatos)
//localhost/3500//miapi/pepe/:id
//localhost/3500//miapi/pepe/f45s654sf54sf6
router.patch('/:id',actualizarDatos)




// router.post('/',async(req,res)=>{
//     console.log(req.body)
//     const{nombreApellido,puesto,sueldo}=req.body//destruncturing
//     // console.log(nombreApellido)
//     console.log(req.body.nombreApellido)
//     // const nombreTrabajador=req.body.nombreApellido
//     // console.log(nombreTrabajador)
//     try{
//         const resultado=await mibase.create({nombreApellido,puesto,sueldo})
//         res.status(200).json(resultado)
//     }
//     catch(error){
//         res.status(400).json({error:error.message})
//     }



    
// })



module.exports=router