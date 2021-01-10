import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const elementRef = useRef()

  useEffect(function () {
    let observer

    const element = externalRef ? externalRef.current : elementRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })
  return { isNearScreen, elementRef }
}
