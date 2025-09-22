import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PopularBooks from './pages/PopularBooks'
import MyBooks from './pages/MyBooks'
import Home from './pages/Home'
import { House, BookOpen, Bookmark, User } from 'lucide-react';

function App() {

  return (
    <BrowserRouter>
      <nav className='bg-[#023047] flex items-center py-4 px-8'>
        <h1 className='text-[#FDF6EC] flex font-bold text-xl italic'>
          My <span className='text-[#ffb703] text-3xl'>Dex!</span>
        </h1>
        <ul className="w-full flex justify-center items-center gap-12">
          <li>
            <Link
              to="/"
              className="group flex items-center gap-2 text-white font-semibold text-lg hover:text-[#ffb703] transition-colors"
            >
              <House
                size={22}
                className="text-white group-hover:text-[#ffb703] transition-colors"
              />
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/mybooks"
              className="group flex items-center gap-2 text-white font-semibold text-lg hover:text-[#ffb703] transition-colors"
            >
              <Bookmark
                size={22}
                className="text-white group-hover:text-[#ffb703] transition-colors"
              />
              Meus Pokemon
            </Link>
          </li>
        </ul>
        <div className='bg-[#FDF6EC] rounded-full p-2'>
          <User
            size={25}
            className="text-[#283618]"
          />
        </div>
      </nav>

      <div className='bg-[#034c6a] min-h-screen'>
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
