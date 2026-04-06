import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section id='landing'>
        <header>
            <div className='header__container'>
                <div className='header__description'>
                    <h2>Your favorite movies</h2>
                    <Link to='#features'>
                    <button className='btn'>Browse Movies</button>                    
                    </Link>
                </div>
                <figure className='header__img--wrapper'>
                    <img src="/assets/moviesheadersvg.png" alt="" />
                </figure>
            </div>
        </header>
    </section>
  )
}

export default Landing