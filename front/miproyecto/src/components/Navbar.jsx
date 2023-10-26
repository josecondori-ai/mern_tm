import React from 'react';
import './Navbar'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
<header>
    <header>
        <div className='container'></div>
        <Link to='/'>Inicio</Link>
        <Link to='/contacto'>Contacto</Link>
    </header>
</header>    )
}

export { Navbar }