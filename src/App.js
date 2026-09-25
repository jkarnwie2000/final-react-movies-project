import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './components/ui/Nav';
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import Movies from "./components/pages/Movies";
import { movies } from "./data.js";
import MovieInfo from "./components/pages/MovieInfo";
import Cart from "./components/pages/Cart";
import Footer from "./components/ui/Footer";


function App() {
  const [cart, setCart] = useState([]);
  
  function changeQuantity(movie, quantity) {
    setCart(cart.map(item => item.imdbID === movie.imdbID 
      ? {
        ...item,
        quantity: +quantity,
      }
      : item 
    )
  );
  }

  function removeItem(item) {
    setCart(cart.filter(movie => movie.imdbID !== item.imdbID))
    console.log('removeItem', item)
  }

  function addToCart(movie) {
  setCart([
    ...cart,
    {
      ...movie,
      quantity: 1,
    },
  ]);
}

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
  }, [cart])
  
  function addToCart(movie) {
  setCart([
    ...cart,
    {
      ...movie,
      quantity: 1,
    },
  ]);
}
  return (
    
  <Router>
    <div className="App">
    <Nav numberOfItems={numberOfItems()} />      
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/movies" exact element={<Movies movies={movies} />} />
      <Route path="/movies/:id" element={<MovieInfo  movies={movies}  cart={cart}  addToCart={addToCart} />} />      
      <Route path="/cart" element={<Cart movies={movies} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
    </Routes>
    <Footer />
    </div>
  </Router>    
  );
}

export default App