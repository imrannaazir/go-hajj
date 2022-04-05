import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import { createContext } from 'react';
import Footer from './components/Footer/Footer';
import useReviews from './hooks/useReviews'
import useBlogs from './hooks/useBlogs';
/* onek try korlam akta context diya multiple value pass korte but parlam na */
export const ReviewsContext = createContext('reviews')
export const BlogsContext = createContext('Blogs')




function App() {
  const [reviews, setReviews] = useReviews()
  const [blogs, setBlogs] = useBlogs()

  return (
    <div className="App">
      <BlogsContext.Provider value={[blogs, setBlogs]}>
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
      </BlogsContext.Provider>
    </div>

  );
}

export default App;
