
import { useEffect, useState } from "react"
import axios from "axios";
import Movie from "./Movie"



const Featured = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
async function fetchFeaturedMovies() {
const res = await axios.get(
    `https://www.omdbapi.com/?apikey=25cd594&s=Dragon`
);
const data = res.data.Search
setMovies(data);
}

fetchFeaturedMovies();

}, []);




return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured Movies
                </h2>
                <div className="movies">
                    {movies.map(movie =>
                    <Movie movie={movie} key={movie.imdbID} />)
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured