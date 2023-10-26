import React, { useState } from 'react';
import './FormularioCarga'
const FormularioCarga = () => {
    const [nombreApellido,setNya]=useState('')
    const [puesto,setPuesto]=useState('')
    const [sueldo,setSueldo]=useState('')
    const [error,setError]=useState(null)
    const [datosVacios,setDatosVacios]=useState([])




const enviarDatos=async(e)=>{
    e.preventDefault()
    console.log(nombreApellido)
    console.log(puesto)
    console.log(sueldo)
    console.log(typeof(sueldo))

    const datosFormulario={nombreApellido,puesto,sueldo}

    console.log(typeof(datosFormulario))

    const response=await fetch('/miapi/pepe/',{
            method:'POST',
            body:JSON.stringify(datosFormulario),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const respuesta=await response.json()
        
        
        if(!response.ok){
            setError(respuesta.error)
            setDatosVacios(respuesta.datosVacios)
        }

        if(response.ok){
            setError(null)
            console.log('se agrego el dato',respuesta)
        }


console.log(datosVacios)

}


    return(
      <form onSubmit={enviarDatos}>
        <h3>Agregar nuevo </h3>
        <label> ingrese su nombre y apellido</label>
        <input type="text" onChange={(e)=>setNya(e.target.value)} value={nombreApellido} className={datosVacios.includes("nombreApellido") ? 'error' : ''} />
        {/* classNmae="" */}
        <label>Puesto</label>
        <input type="text" onChange={(e)=>setPuesto(e.target.value)} value={puesto} />
        <label >Sueldo</label>
        <input type="number" onChange={(e)=>setSueldo(e.target.value)} value={sueldo} />
        <button>Agregar</button>
        {error && <div className='error'>{error}</div>}
      </form>
    )
}

export { FormularioCarga }