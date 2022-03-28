import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './ui/Header';
import Hero from './ui/Hero';
import MovieRows from './movies/MovieRows'
import Search from './ui/Search';


function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('avengers')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true)
      const apiKey = '3c93a0c2'
      let response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
      let data = await response.json()

      if (data.Response == 'True') {
        setMovies(data.Search)
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    }

    getMovies()
    
  }, [query])
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="movie-section">
        <Search getQuery={(e) => setQuery(e)} />
        <MovieRows items={movies} isLoading={isLoading} />
      </section>
    </div>
  );
}

export default App;
