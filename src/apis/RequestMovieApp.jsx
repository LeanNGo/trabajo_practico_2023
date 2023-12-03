import React, { useEffect, useState } from 'react'
import Cards from '../components/cards/Cards';
import GroupCards from '../components/conjunto_cards/GroupCards';

const RequestMovieApp = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchMovies = async () => {
            setError(null);
            try {
            const url = "https://api.themoviedb.org/3/trending/all/week?api_key=803580c46a07cda0c4f9ffcfd17bc4e6";
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch (error){
            setError(error);
        }finally{
            setLoading(false);
        }
        }    
        fetchMovies()
    },[]);    
    
    return (        
     <GroupCards
        movies={movies}
        renderItem ={(item)=>{
            return <Cards id={item.id} name={item.name} image={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/>
        }}
     />
  )
}

export default RequestMovieApp