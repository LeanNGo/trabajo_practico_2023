import React from 'react'
import TituloPortada from '../titulo_portada/TituloPortada'
import Header from '../header/Header'

const Portada = ({letras, logo}) => {
  return (
    <>
        <div className="portada">
            <Header logo={logo}/>
            <TituloPortada letras={letras}/>            
        </div>
    </>
  )
}

export default Portada