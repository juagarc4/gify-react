import React, { Suspense } from 'react'
import { Link, Route } from 'wouter'

import './App.css'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import StaticContext from 'context/Context'
import { GifsContextProvider } from 'context/GifsContext'

const HomePage = React.lazy(() => import('pages/Home'))
export default function App() {
  return (
    <StaticContext.Provider value={{ name: 'Raul', suscribeToMyChannel: true }}>
      <div className='App'>
        <header>
          <Link href='/'>
            <figure className='App-logo'>
              <img src='/Logo.png' alt='Gify Logo' />
            </figure>
          </Link>
        </header>
        <Suspense fallback={null}>
          <section className='App-content'>
            <GifsContextProvider>
              <Route path='/' component={HomePage} />
              <Route path='/search/:keyword' component={SearchResults} />
              <Route path='/gif/:id' component={Detail} />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  )
}
