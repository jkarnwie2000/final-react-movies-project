import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./components/ui/Nav";
import Home from "./components/pages/Home";

function App() {
  return (
    
  <Router>
    <div>
      <Nav numberOfItems={numberOfItems()} />      
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route />
      <Route />
      <Route />
    </Routes>
    </div>
  </Router>
    
  )
}

export default App