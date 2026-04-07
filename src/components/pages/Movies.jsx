import { useState } from "react";
import { movies } from "../../data.js";
import Movie from "../ui/Movie";



const Movies = ({ movies: initialMovies }) => {
const [movies, setMovies] = useState(initialMovies)
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
  return (
    <div className="movies__body">
        <div id="maian" className="movies__main">
            <section>
                <div className="movies__container">
                    <div className="row">
                        <div className="movies__header">
                            <h2 className="section__title movies__header--title">All Movies</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="LOW_TO_HIGH">Price, Low to High</option>
                            <option value="HIGH_TO_LOW">Price, High to Low</option>
                            <option value="RATING">Rating</option>
                            </select>
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