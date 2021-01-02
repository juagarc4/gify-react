import React from 'react'
import Gif from 'components/Gif'
import './styles.css'

export default function ListOfGifs({ gifs }) {
  return (
    <div className='list-of-gifs'>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  )
}
