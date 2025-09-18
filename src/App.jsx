import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PopularBooks from './pages/PopularBooks'
import MyBooks from './pages/MyBooks'
import Home from './pages/Home'

function App() {

  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/popularbooks">Popular books</Link> </li>
            <li> <Link to="/mybooks" > My books </Link> </li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popularbooks" element={<PopularBooks />} />
            <Route path="/mybooks" element={<MyBooks />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
