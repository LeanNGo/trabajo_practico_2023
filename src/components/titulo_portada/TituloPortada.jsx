import React from 'react'

const TituloPortada = ({letras}) => {
  return (
    <>
        <div className="componente_5">
            <img src={letras} alt="" />    
            <nav className="nav-portada"><button>▶Reproducir</button><button>➕Mi Lista</button></nav>
            <p className="resena">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi necessitatibus illo minima, 
            consectetur repudiandae odio numquam exercitationem</p>
        </div>
    </>
  )
}

export default TituloPortada