import React, { useEffect, useState } from 'react'

import getTrendingTerms from 'services/getTrendingTermsService'
import Category from 'components/Category'

export default function TrendingTerms() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])

  return <Category name='Trending Terms' options={trends} />
}
