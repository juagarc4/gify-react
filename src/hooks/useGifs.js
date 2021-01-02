import { useContext, useEffect, useState } from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const INITIASL_PAGE = 0
export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextpage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(0)
  const { gifs, setGifs } = useContext(GifsContext)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(
    function () {
      setLoading(true)

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, keywordToUse, setGifs]
  )

  useEffect(
    function () {
      if (page === INITIASL_PAGE) return
      setLoadingNextPage(true)
      getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    },
    [keywordToUse, page, setGifs]
  )
  return { loading, loadingNextpage, gifs, setPage }
}
