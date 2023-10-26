import React, { useEffect, useState } from 'react';
import './Home'
import { VerDatos } from './VerDatos'
const Home = () => {


//sin axios
//logica de react==> modo sin paquetes

const [datos,setDatos]=useState([])

useEffect(()=>{
    const traerInfo= async ()=>{
        const response=await fetch('/miapi/pepe/')
        const datosLimpios=await response.json()
        console.log(datosLimpios)
        setDatos(datosLimpios)
    }

    traerInfo()

},[])


    return(
        <div>{datos.map((dato)=>(
            // <p key={dato._id}>{dato.nombreApellido}</p>
            <VerDatos datos={dato} key={dato._id}/>
        ))}</div>
    )
}

export { Home }