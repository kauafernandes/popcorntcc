import { Link } from "react-router-dom";

import './MovieCard.css';

const imagesURL = 'https://image.tmdb.org/t/p/w500/';


const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movieRow">
          <div className="movieRow--listarea">
            
      <div className="movieRow--item">
        <table>
          <tbody>
            <tr>
              <td> 
                <div className="azul">
               {showLink && <Link to=
               {`/movie/${movie.id}`}> 
               <img src={imagesURL + movie.poster_path} 
               alt={movie.title} /> 
               </Link>}
                <h1>
                <div className="featured-name">{movie.original_name}</div> 
                <div className="featured-name">{movie.original_title}</div> 
               </h1>
               <br/> <h2> {movie.overview} </h2>
               </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>

  );
};

export default MovieCard;
