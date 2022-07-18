import React from 'react'
import { NavLink } from 'react-router-dom'

const MoviesList = (props) => {
    const { movies } = props

    return (
        <ul>
            { movies.map(movie => <li key={movie.id}><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></li>) }
        </ul>
    )
}

export default MoviesList
