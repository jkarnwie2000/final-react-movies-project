import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className='container'>
        <div className='row row__column'>                      
            <div className='footer__list'>
                <a href="/" className='footer__link'>Home</a>
                <span className='footer__link no-cursor'>About</span>
                <Link to='/movies' className='footer__link'>Movies</Link>
                <Link to='/cart' className='footer__link'>Cart</Link>                
                <p className='footer__copyright'>Copyright &copy; 2026 Julius Gold's Movies</p>     
            </div>            
        </div>
    </div>
    </footer>
  )
}

export default Footer