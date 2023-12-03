import React, { useEffect, useState } from 'react'

const useFetch = () => {
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
    return{
      
    }

    }

export default useFetch