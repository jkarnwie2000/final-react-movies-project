import { Link } from 'react-router-dom';


const Movie = ({ movie }) => {
return (
    
<div className="movie">
    <Link to={`/movies/${movie.imdbID}`}>
    <figure className="movie__img--wrapper">
        <img src={movie.Poster} alt='' className='movie__img' />
    </figure>
    </Link>
    <div className="movie__title">
        <Link to={`/movies/${movie.imdbID}`} className='movie__title--link'> 
        {movie.Title}
        </Link>
    </div>    
</div>

  );
};

export default Movie