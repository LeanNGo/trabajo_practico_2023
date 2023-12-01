import React from 'react';
import logo from './assets/img/logo_.png';
import letras from './assets/img/letras.png'
import Portada from './components/portada/Portada';
import Cards from './components/cards/Cards';

const App = () => {
  return (
    <div>
      
      <Portada letras={letras} logo={logo}/>      
      <Cards section={"section 1"}/>
      <Cards section={"section 2"}/>
      <Cards section={"section 3"}/>

    </div> 
  )  
}

export default App