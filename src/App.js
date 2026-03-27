import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesHome from './pages/MoviesHome';
import SearchMovies from './pages/SearchMovies';

function App() {  
return (
  <Router> 
    <div className="App">
      <Routes>
        <Route path='/' element={<MoviesHome />}></Route>
        <Route path='/:imdbID' element={<SearchMovies />}></Route>
      </Routes>
    </div>
  </Router> 
  );


}

export default App;
