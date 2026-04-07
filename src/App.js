import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './components/ui/Nav';
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import { counter } from "@fortawesome/fontawesome-svg-core";
import Movies from "./components/pages/Movies";
import { movies } from "./data.js";
import MovieInfo from "./components/pages/MovieInfo";
import Cart from "./components/pages/Cart";
import Footer from "./components/ui/Footer";


function App() {
  const [cart, setCart] = useState([]);
  function addToCart(movie) {
    setCart([...cart, {...movie, quantity: 1}])
  }

  function changeQuantity(movie, quantity) {
    setCart(cart.map(item => item.id === movie.id 
      ? {
        ...item,
        quantity: +quantity,
      }
      : item 
    )
  );
  }

  function removeItem(item) {
    setCart(cart.filter(movie => movie.id !== item.id))
    console.log('removeItem', item)
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

  return (
    
  <Router>
    <div className="App">
    <Nav numberOfItems={numberOfItems()} />      
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/movies" exact element={<Movies movies={movies} />} />
      <Route path="/movies/:id" element={<MovieInfo movies={movies} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" element={<Cart movies={movies} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
    </Routes>
    <Footer />
    </div>
  </Router>    
  );
}

export default App