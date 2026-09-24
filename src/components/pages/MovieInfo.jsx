import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const MovieInfo = ({ movies, addToCart, cart }) => {
const { id } = useParams();
const [movie, setMovie] = useState(null);
const [searchTerm, setSearchTerm] = useState("");


function addMovieToCart(movie) {
    addToCart(movie);
}

function movieExistsOnCart() {
    return cart.find(item => item.id === movie.id);
}
useEffect(() => {
  axios
    .get(`https://www.omdbapi.com/?apikey=25cd594&i=${id}&plot=full`)
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}, [id]);

if (!movie) {
  return <p>Loading...</p>;
}

console.log("Movie data:", movie);

return (
<div id="movies__body">
        <main id="movies__main">
        <div className="movies__container">
        <div className="row">
        <div className="movie__selected--top">
            <Link to="/movies" className="movie__link">
            <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/movies" className="movie__link">
            <h2 className="movie__selected--title--top">Movies</h2>
            </Link>  
        </div>
        <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="movie__selected--img"
              />
            </figure>
            <div className="movie__selected--description">
                <h2 className="movie__selected--title">
                    {movie.Title}
                </h2>
        
        <div className="movie__summary">
            <h3 className="movie__summary--title">
                Summary
            </h3>
            <p className="movie__summary--para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Culpa in amet optio, molestiae, laboriosam esse atque 
                consequatur perspiciatis ut quo, quam praesentium consequuntur 
                harum necessitatibus quaerat nulla beatae neque provident!
            </p>
            <p className="movie__summary--para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Culpa in amet optio, molestiae, laboriosam esse atque 
                consequatur perspiciatis ut quo, quam praesentium consequuntur 
                harum necessitatibus quaerat nulla beatae neque provident!
            </p>
        </div>
        {movieExistsOnCart() ? 
        (
        <Link to={`/cart`} className="movie__link">  
        <button className="btn">Checkout</button>
        </Link>
        ) 
        : (
        <button className="btn" onClick={() => addMovieToCart(movie)}>Add to cart</button>   
            )}
        </div>
        </div>
        </div>
        </div>

            <div className="movies__container">
                <div className="row">
                    <div className="movie__selected--top">
                    <h2 className="movie__selected--title--top">
                        Recommended Movies
                    </h2>
                    </div>                    
            </div>
            </div>
        </main>        
  </div>   
  
)
} 
export default MovieInfo

