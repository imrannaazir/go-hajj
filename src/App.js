import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import { createContext, useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
export const ReviewsContext = createContext('reviews')



function App() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div className="App">
      <ReviewsContext.Provider value={[reviews, setReviews]}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='about' element={<About />} />
        </Routes>
        <Footer />
      </ReviewsContext.Provider>
    </div>

  );
}

export default App;
