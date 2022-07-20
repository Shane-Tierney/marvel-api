import { Grid } from '@mantine/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'

const MoviesList = (props) => {
    const { movies } = props

    return (
        <Grid gutter={60} style={{paddingTop: '60px'}}>
            { movies.map(movie => <MovieCard movie={movie}/>) }
        </Grid>
    )
}

export default MoviesList
