import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import Header from '../../header/Header'
import Menu from '../../menu/Menu';

import "./MoviesGrid.css";
import "./Search.css"

const searchURL = 'https://api.themoviedb.org/3/search/multi/';
const apiKey = 'api_key=7d3f51149d5de366981e065d4f1e64ee';

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div>
      <Header/>
      <Menu/>
      <div className='Resultado'>
       <h1>Resultados obtidos para: <span className="query-text">{query}</span></h1>
      </div>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
