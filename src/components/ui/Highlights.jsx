import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Highlight from "./Highlight";

const Highlights = () => {
  return (
    <section id='highlights'>
        <div className='container'>
            <div className='row'>
                <h2>
                    Why Choose Julius Gold's Movies Library
                </h2>
                <div className='highlight__wrapper'>                    
                    <Highlight icon={<FontAwesomeIcon icon='bolt' />}  
                    title= 'Quick and Easy' 
                    para= 'Get access to the movie you purchased online instantly.' 
                    />
                    <Highlight icon={<FontAwesomeIcon icon='compact-disc' />}  
                    title= 'Over 50,000 movies' 
                    para= 'Find your favorite movies in all categories.' 
                    />
                    <Highlight icon={<FontAwesomeIcon icon='tags' />}  
                    title= 'Affordable' 
                    para= 'Enjoy our forever discounts.' 
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Highlights