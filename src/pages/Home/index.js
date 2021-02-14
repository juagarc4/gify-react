import React from 'react'
import { Helmet } from 'react-helmet'
import { useGifs } from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingTerms from 'components/TrendingTerms'
import SearchForm from 'components/SearchForm'

export default function Home() {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <meta name='description' content='Gif searcher done with React' />
        <meta name='rating' content='General' />
        <link
          rel='canonical'
          content='https://gify-react-git-develop.raulgarciacanet.vercel.app
'
        />
      </Helmet>
      <header className='o-header'>
        <SearchForm />
      </header>
      <div className='App-wrapper'>
        <div className='App-main'>
          <div className='App-results'>
            <h3 className='App-title'>Last search</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className='App-category'>
            <TrendingTerms />
          </div>
        </div>
      </div>
    </>
  )
}
