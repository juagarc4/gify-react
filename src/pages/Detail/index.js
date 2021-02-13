import React from 'react'
import { Redirect } from 'wouter'
import useSingleGif from 'hooks/useSingleGif'
import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import { Helmet } from 'react-helmet'
export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={title} />
        <meta name='rating' content='General' />
      </Helmet>
      <h3 className='App-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}
