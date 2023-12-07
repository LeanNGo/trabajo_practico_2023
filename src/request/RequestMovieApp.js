import { useEffect, useState } from 'react'


const RequestMovieApp = (service) => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
        const fetchMovies = async () => {
            setError(null);
            try {
            const res = await service();
            setMovies(res.results);
        }catch(e){
            setError(e.message);
            console.log(`ERROR ${error}`);
        }finally{
            setLoading(false);
        }
        };

    useEffect(()=>{    
        fetchMovies()
    },[]);        
    return {movies, error, loading}
  
}

export default RequestMovieApp