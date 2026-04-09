import { useState } from "react";
import Movie from "../ui/Movie";
import axios from "axios";



const Movies = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");


function filterMovies(filter) {

    if (filter === "LOW_TO_HIGH") {
        setMovies(movies.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
    }

    if (filter === "HIGH_TO_LOW") {
        setMovies(movies.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
    }

    if (filter === "RATING") {
        setMovies(movies.slice().sort((a, b) => b.rating - a.rating))
    }
}

async function fetchMovies(e) {
    e.preventDefault();
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=25cd594&s=${searchTerm}`,
    );
    const data = res.data.Search;
    setMovies(data);
  }

return (
    <div className="movies__body">
        <div id="main" className="movies__main">
            <section>
                <div className="search">
                <h2 className="section__title">Find Your Movies Here</h2>
                <form className="search__form" onSubmit={fetchMovies}>
                    <input type="text" placeholder="Search for movies..." onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button onClick={fetchMovies}>
                        Search
                    </button>
                </form>
                </div>
                <div className="movies__container">
                    <div className="row">
                        <div className="movies__header">
                            <h2 className="section__title movies__header--title">All Movies</h2>
                            
                        </div>
                        <div className="movies">
                        {
                            movies.map(movie => <Movie movie={movie} key={movie.id}/>)
                        }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Movies