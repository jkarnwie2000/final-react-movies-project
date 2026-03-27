import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";


function SearchMovies() {
  const { imdbID } = useParams();
  const [searchMovies, setSearchMovies] = useState([]);
  
  setSearchMovies([{searchmovie: 1}])
  useEffect(() => {
    async function fetchSearchMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=25cd594&s=fast&imdbID=${"imdbID"}`)
    setSearchMovies(data);
}
    fetchSearchMovies();
  }, []);
  
  
  return (
    <div>{searchMovies.map(searchmovie => <div>{searchmovie.imdbID}</div>)}</div>
  )
}

export default SearchMovies