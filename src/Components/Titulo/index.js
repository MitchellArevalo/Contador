import React from 'react'
import './titulo.css'
import logo from '../Resourses/LogoSena.png';

export const Titulo = () => {
  return (
    <div className='header'>
        <h1>Contador</h1>
        <img src={logo} className="senaLogo" alt="logo" />
    </div>

  )
}
