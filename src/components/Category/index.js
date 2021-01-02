import React from 'react'
import { Link } from 'wouter'

import './styles.css'

export default function Category({ name, options = [], ...props }) {
  return (
    <div className={props.className}>
      <h3 className='category-title'>{name}</h3>
      <ul className='category-list'>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link className='category-link' to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
