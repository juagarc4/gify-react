import React from 'react'
import { Link, Route } from 'wouter'

import './App.css'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import StaticContext from 'context/Context'
import { GifsContextProvider } from 'context/GifsContext'

export default function App() {
  return (
    <StaticContext.Provider value={{ name: 'Raul', suscribeteAlCanal: true }}>
      <div className='App'>
        <header>
          <Link href='/'>
            <figure className='App-logo'>
              <img src='/Logo.png' alt='Gify Logo' />
            </figure>
          </Link>
        </header>
        <section className='App-content'>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/gif/:id' component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}
