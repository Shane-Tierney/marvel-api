import React, { useEffect, useState } from 'react'
import MoviesList from '../MoviesList/MoviesList'
import MoviesSearch from '../MoviesSearch/MoviesSearch'
import axios from 'axios'

const Movies = () => {
    const [id, setId] = useState('')
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            let fetch = await axios.get('http://localhost:1337/api/movies')

            setMovies(fetch.data)
            setFilteredMovies(fetch.data)
        }

        fetchMovies()
    }, [])

    useEffect(() => {
        const newMovies = movies.filter((movie) => movie.title.toLowerCase().includes(id.toLowerCase()))

        setFilteredMovies(newMovies)
    }, [id, movies, filteredMovies])

    return (
        <div>
            <h1>MCU Movies</h1>
            <h3>A searchable list of Marvel Cinematic Universe movies</h3>
            <MoviesSearch id={id} setId={setId}/>
            <MoviesList movies={filteredMovies}/>
        </div>
    )
}

export default Movies
