import React, { Suspense } from 'react'

import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingTerms = React.lazy(() => import('./TrendingTerms'))

export default function LazyTrending() {
  const { isNearScreen, elementRef } = useNearScreen()

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>{isNearScreen ? <TrendingTerms /> : <Spinner />} </Suspense>
    </div>
  )
}
