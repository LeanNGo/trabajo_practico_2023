import React from 'react';
import RequestMovieApp from './apis/RequestMovieApp';
import Header from './components/header/Header';
import Portada from './components/portada/Portada';


const App = () => {
  return (
    <div>
      
      <Portada/>                
      <RequestMovieApp/>

    </div> 
  )  
}
/*
<Portada letras={letras} logo={logo}/>      
      <Cards section={"section 1"}/>
      <Cards section={"section 2"}/>
      <Cards section={"section 3"}/>
      <LogoNetflix logoN={logoN} />

*/
export default App