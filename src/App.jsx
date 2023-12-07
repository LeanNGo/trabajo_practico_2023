import React from 'react';
import RequestMovieApp from './request/RequestMovieApp';
import Portada from './components/portada/Portada';
import Cards from './components/cards/Cards';
import GroupCards from './components/conjunto_cards/GroupCards';
import { getMovieService } from './services/movieService';



const App = () => {
  const {movies} = RequestMovieApp(getMovieService)
  return (
    <div>
      <Portada/>       
      <GroupCards
        movies={movies}
        renderItem={(item)=>{
            return <Cards key={item.id} name={item.name||item.title} image={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/>
        }}
     />
      
    </div> 
  )  
}
export default App