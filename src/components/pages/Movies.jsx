import { useState } from "react";
<<<<<<< HEAD
=======
import { movies } from "../../data.js";
>>>>>>> 1bf12e4 (test run)
import Movie from "../ui/Movie";
import axios from "axios";



const Movies = () => {
const [movies, setMovies] = useState([])
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

 async function fetchMovies() {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=3608d43&s=${searchTerm}`)
    const data = res.data.Search
    setMovies(data);    
}
  return (
    <div className="movies__body">
        <div id="maian" className="movies__main">
            
            <section>
<<<<<<< HEAD
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
=======
                <div className="search">
                    <h2 className="section__title">Find Your Movie</h2>
                    <div className="search__form">
                        <input type="text" placeholder="Search for movies..." onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button className="search__button" onClick={fetchMovies}>
                            Search
                        </button> 
                    </div>
                </div>                
                    <div className="movies__container">
                        <div className="row"> 
                          <div className="movies__header">                      
                            <h2 className="section__title movies__header--title"></h2>
                            
>>>>>>> 1bf12e4 (test run)
                        </div>
                        <div className="movies">
                        {
                            movies.map(movie => <Movie movie={movie} key={movie.imdbID}/>)
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