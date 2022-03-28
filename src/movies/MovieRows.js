import React from 'react'
import Spinner from '../ui/Spinner'
import MovieCards from './MovieCards'

const MovieRows = ({items, isLoading}) => {
  return isLoading ? (<Spinner />) : (
    <section className="movie-rows">
        <div className="movie pb-5">
            <h2 className='mx-2'>Movie</h2>
            <div className='card-rows d-flex flex-nowrap overflow-auto'>
                {items.map(item => {if(item.Type == 'movie'){
                  return (
                  <MovieCards key={item.id} item={item} />
                )
                }})}
            </div>
        </div>

        <div className="movie pb-5">
            <h2 className='mx-2'>Series</h2>
            <div className='card-rows d-flex flex-nowrap overflow-auto'>
                {items.map(item => {if(item.Type == 'series'){
                  return (
                  <MovieCards key={item.id} item={item} />
                )
                }})}
            </div>
        </div>
    </section>
  )
}

export default MovieRows