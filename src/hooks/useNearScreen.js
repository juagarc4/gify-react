import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const elementRef = useRef()

  useEffect(function () {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      observer.observe(elementRef.current)
    })

    return () => observer && observer.disconnect()
  })
  return { isNearScreen, elementRef }
}
