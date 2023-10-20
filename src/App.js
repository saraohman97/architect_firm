import React from 'react'
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NoPageYet from './pages/NoPageYet';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/empty' element={ <NoPageYet /> } />
    </Routes>
  )
}

export default App