import axios from 'axios';


export const getMovieService = async () => {
  const res = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=803580c46a07cda0c4f9ffcfd17bc4e6");

  return res.data
}