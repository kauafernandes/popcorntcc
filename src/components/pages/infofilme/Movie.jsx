import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from '../../header/Header'
import Menu from '../../menu/Menu';
import { FaStar } from "react-icons/fa";

import "./Movie.css";

const API_KEY  = 'api_key=7d3f51149d5de366981e065d4f1e64ee';
const API_BASE = 'https://api.themoviedb.org/3/movie/'; 
const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${API_BASE}${id}?language=pt-BR&${API_KEY}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div>
     <Header/>
     <div className="menu"> <Menu/> </div>
     <Link to="/"> <img src="https://i.imgur.com/pC5Et3d.png" className="setavoltar"/> </Link>

      <div className="conteudo">
         {movie && (
           <>
           <div className="areazul">

           <img src="https://i.imgur.com/ekOHYcX.png" className="iconedosfavoritos"/> 

            <div className="nome">
              <h2 className="nomefilme"> {movie.title} {movie.name} </h2>    
            </div>
             
              <div className="ftcatalogo">
              <img className='imgtitulo' src={API_IMAGE + movie.poster_path} alt={movie.title} movie={movie} />
              </div>

              <div className="dados">
                
                <h2 className="generosenota"> {
                movie.genres && movie.genres.slice(0, 4).map((genre, i) => (
                <span key={i}> {genre.name + ' | '}</span>
                ))}
                   <FaStar className="estrela" /> Avaliação: {movie.vote_average}
                </h2>                

                <div className="descricao"> {movie.overview} </div>

              <p className="adicione"> Adicione à sua lista </p>
                <div className="divbotoesfilmeetiqueta">
                 <button className="botaofilmeetiqueta">Assistido</button>
                 <button className="botaofilmeetiqueta">Assistindo</button>
                 <button className="botaofilmeetiqueta">Quero Assistir</button>
                 <button className="botaofilmeetiqueta">Reassistindo</button>
              </div>

              <div>
               <img src="https://i.imgur.com/Q9IKuUe.png" className="iconedaresenha"/>
              </div>

              </div>
              </div>
          </>
    )}

  </div>
  </div>
  );
};

export default Movie;