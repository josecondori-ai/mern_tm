import React from 'react';


const VerDatos = ({datos}) => {

const haceclick= async()=>{
    const response=await fetch('/miapi/pepe/'+datos._id,{
        method:'DELETE'
    })

    const respuesta= await response.json()
    console.log('se elimino',respuesta)
}



    return(
        <div  className='detalles'>
        <h4><strong>Nombre y Apellido: </strong>{datos.nombreApellido}</h4>
        <p><strong>Puesto:</strong>{datos.puesto}</p>
        <p><strong>Sueldo:</strong>${datos.sueldo}</p>
        {/* <p><strong>Ultima Actualizacion:</strong>{datos.updatedAt}</p> */}
        <span onClick={haceclick}><i className="bi bi-trash">Eliminar</i></span>
        
        {/* <span onClick={haceclick}</span> */}
        
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        <i class="bi bi-eye">Ver mas</i>
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Mas informacion</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Fecha de creacion: {datos.createdAt}</p>
      </div>
      
    </div>
  </div>
</div>

       

        
        </div>
    )
}

export { VerDatos }