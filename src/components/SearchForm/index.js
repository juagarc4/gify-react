import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'

import styles from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {
  const [, pushLocation] = useLocation()
  const { keyword, rating, changeKeyword, changeRating } = useForm({ initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeKeyword = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }
  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value })
  }
  return (
    <form onSubmit={handleSubmit} className={styles['c-search']}>
      <button>Search</button>
      <input
        className={styles['c-search-input']}
        placeholder='Search a gif here...'
        onChange={handleChangeKeyword}
        type='text'
        value={keyword}
      />
      <select className={styles['c-search-list']} value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  )
}

export default React.memo(SearchForm)
