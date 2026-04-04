import React from 'react'
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Movie = ({ movie }) => {
return (
    
<div class="movie">
    <Link to={`/movies/${movie.id}`}>
    <figure class="movie__img--wrapper">
        <img src={movie.url} alt='' className='movie__img' />
    </figure>
    </Link>
    <div class="movie__title">
        <Link to={`/movies/${movie.id}`} className='movie__title--link'> 
        {movie.title}
        </Link>
    </div>
    <Rating rating={movie.rating} />
    <Price salePrice={movie.salePrice} originalPrice={movie.originalPrice} />
</div>

  );
};

export default Movie