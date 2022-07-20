import React from 'react'
import Movies from './components/Movies/Movies'
import MovieInfo from './components/MovieInfo/MovieInfo'
import Error from './components/Error/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/movies/:id' element={<MovieInfo/>} />
          <Route path='/' element={<Movies/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
