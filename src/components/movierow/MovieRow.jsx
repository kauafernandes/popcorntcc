import './MovieRow.css';
import { Link } from "react-router-dom"

export default ({ title, items}) => {

    return (
     <div className="movieRow">
         <h2>{title}</h2>
        <div className="movieRow--listarea">
         <div className="movieRow--list">
            {items.results.length > 0 && items.results.map((item, key)=>(
                <div key={key} className="movieRow--item">
                    <table>
                        <tbody>
                          <tr>
                            <td> 
                             <Link to={`/movie/${item.id}`}> 
                              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path} `} 
                              alt={item.original_name} /> 
                             </Link> 
                            </td>
                            <td> 
                              <h1> 
                               <div className="featured--name">{item.original_name}</div> 
                               <div className="featured--name">{item.original_title}</div> 
                              </h1> 
                               <br/> <h2> {item.overview} </h2>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            ))}
         </div>
        </div>
     </div>
    );
    
}