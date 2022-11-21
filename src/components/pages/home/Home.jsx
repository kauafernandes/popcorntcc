import  React, {useEffect, useState} from 'react';
import './Home.css';
import Header from '../../header/Header'
import Menu from '../../menu/Menu';
import MovieCard from '../search/MovieCard';

const moviesURL = 'https://api.themoviedb.org/3/trending/all/week';
const apiKey = 'api_key=7d3f51149d5de366981e065d4f1e64ee';

export const Home = () => {

  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}?${apiKey}&language=pt-br`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
    
  }, []);

  return (
    <div>
      <Header/>
      <Menu/>
      <div className="container">
    <div className='Destaques'>
    <h1>Destaques do momento</h1>
    </div>

    <div className="movies-container">
      {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
    </div>

    </div>
  )
}

export default Home