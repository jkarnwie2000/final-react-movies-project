import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Footer>
        <div className='container'>
            <div row row__column>
            <Link to='/' className='footer__logo'>
            <figure>
                <img src="/assets/moviepagelogo.png" alt="" className='footer__logo--img'/>
            </figure>
            </Link>
            <div className='footer__list'>
                <Link to='/' className='footer__link'>Home</Link>
                <span className='footer__link no-cursor'>About</span>
                <Link to='/movies' className='footer__link'>Movies</Link>
                <Link to='/cart' className='footer__link'>Cart</Link>
            </div>
            <div className='footer__copyright'>
                Copyright &copy; 2026 Julius Gold's Movies
            </div>
            </div>
        </div>
    </Footer>
  )
}

export default Footer