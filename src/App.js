import React from 'react'
import { Link, Route } from 'wouter'

import './App.css'
import ListOfGifs from './components/ListOfGifs'

export default function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>APP</h1>
        <Link to='/gif/matrix'>Matrix</Link>
        <Link to='/gif/goku'>Goku</Link>
        <Link to='/gif/panda'>Pandas</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  )
}
