import React from 'react'

const MoviesSearch = (props) => {
    const { id, setId } = props

    return (
        <input type='text' name='search' value={id} onChange={(event) => setId(event.target.value)} />
    )
}

export default MoviesSearch
