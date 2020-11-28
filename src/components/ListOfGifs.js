import { findAllByTestId } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs({ params }) {
  const { keyword } = params
  const [loading, setLoading] = useState(findAllByTestId)
  const [gifs, setGifs] = useState([])

  useEffect(
    function () {
      setLoading(true)
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      })
    },
    [keyword]
  )

  if (loading) return <i>Loading...</i>
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  )
}
