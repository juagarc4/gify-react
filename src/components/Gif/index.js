import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function Gif({ title, id, url }) {
  return (
    <div className='gif'>
      <Link href={`/gif/${id}`} className='gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}
