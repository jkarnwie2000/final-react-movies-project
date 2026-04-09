import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';



const MovieInfo = () => {
const { id } = useParams();
const [movie, setMovie] = useState({});

useEffect(() => {
const fetchMovieById = async () => {
const res = await axios.get(`https://www.omdbapi.com/?apikey=3608d43&i=${id}`);
const data = res.data
setMovie(data);
}
fetchMovieById();
}, [])

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
                        <img src={movie.Poster} alt="" className='movie__selected--img'/>
                    </figure>
                    <div className='movie__selected--description'>
                        <h2 className='movie__selected--title'>
                            {movie.Title}
                        </h2>                                             
                        <div className='movie__selected--price'></div>
                        <div className='movie__summary'>
                            <h3 className='movie__summary--title'>
                                Summary
                            </h3>
                            <p className='movie__summary--para'>
                            {movie.Plot}
                            </p>                            
                        </div>                                           
                    </div>
                </div>
            </div>
        </div>        
    </main>
</div>
  )
}

export default MovieInfo

