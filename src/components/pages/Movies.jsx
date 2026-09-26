import { useState } from "react";
import Movie from "../ui/Movie";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);

  async function fetchMovies(e) {
    e.preventDefault();
    setSearched(true);
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=25cd594&s=${searchTerm}`,
    );
    const data = res.data.Search;
    setMovies(data || []);
  }

  return (
    <div className="movies__body">
      <div id="main" className="movies__main">
        <section>
            <h2 className="header__title">Julius Gold Movies</h2>
          <div className="search-container">            
            <form className="search__form" onSubmit={fetchMovies}>
              <input                
                type="text"
                className="search__input search__input--focus"
                placeholder="Search for movies..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn" type="submit">Search</button>
            </form>
          </div>
          <div className="movies__container">
            <div className="row">
              <div className="movies__header">                
              </div>
              <div className="movies">
                {searched && movies.length === 0 && (
                  <p style={{ color: "gold", fontWeight: "bold" }}>Movie not found.</p>
                )}
                  {movies.map((movie) => (
                  <Movie movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Movies;
