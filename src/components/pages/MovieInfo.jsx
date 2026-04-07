import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../ui/Rating';
import Price from '../ui/Price';
import Movie from '../ui/Movie';








const MovieInfo = ({movies, addToCart, cart}) => {
const { id } = useParams();
const movie = movies.find(movie => +movie.id === +id);

function addMovieToCart(movie) {
    addToCart(movie);
}

function movieExistsOnCart() {
    return cart.find(movie => movie.id === +id)
}

  return (
    <div id='movies__body'>
        <main id='movies__main'>
            <div className='movies__container'>
                <div className='row'>
                    <div className='movie__selected--top'>
                        <Link to='/movies' className='' >
                            <FontAwesomeIcon icon='arrow-left' />
                        </Link>
                        <Link to='/movies' className=''>
                        <h2 movie__selected--title--top>Movies</h2>                        
                        </Link>
                    </div>
                <div className='movie__selected'>
                    <figure className='movie__selected--figure'>
                        <img src={movie.url} alt="" className='movie__selected--img'/>
                    </figure>
                    <div className='movie__selected--description'>
                        <h2 className='movie__selected--title'>
                            {movie.title}
                        </h2>
                        <Rating rating={movie.rating}/>
                        <div movie__selected--price>
                        <Price originalPrice={movie.originalPrice} salePrice={movie.salePrice} />
                        </div>
                        <div className='movie__summary'>
                            <h3 className='movie__summary--title'>
                                Summary
                            </h3>
                            <p className='movie__summary--para'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Culpa in amet optio, molestiae, laboriosam esse atque 
                            consequatur perspiciatis ut quo, quam praesentium consequuntur 
                            harum necessitatibus quaerat nulla beatae neque provident!
                            </p>
                            <p className='movie__summary--para'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Culpa in amet optio, molestiae, laboriosam esse atque 
                            consequatur perspiciatis ut quo, quam praesentium consequuntur 
                            harum necessitatibus quaerat nulla beatae neque provident!
                            </p>
                        </div>
                        {movieExistsOnCart() ? (
                            <Link to={'/cart'} className='movie__link'>
                            <button className='btn'>Checkout</button>
                            </Link>
                        ) 
                        : (
                            <button className='btn' onClick={() => addMovieToCart(movie)}>Add to Cart</button>
                        )}                        
                    </div>
                </div>
            </div>
        </div>
        <div className='movie__container'>
            <div className='row'>
                <div movie__selected--top>
                    <h2 movie__selected--title--top>
                        Recommended Movies
                    </h2>
                </div>
                <div className='movies'>
                    {
                    movies
                    .filter(movie => movie.rating === 5 && +movie.id !== +id)
                    .slice(0, 4)
                    .map(movie => <Movie movie={movie} key={movie.id} />)
                    }
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default MovieInfo

