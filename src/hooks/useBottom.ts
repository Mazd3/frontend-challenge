import { useEffect } from 'react'

export const useBottom = (func: () => void, stop?: boolean) => {
  useEffect(() => {
    const checkBottom = () => {
      if (stop) return
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        func()
      }
    }
    if (window.innerHeight > document.documentElement.offsetHeight) {
      checkBottom()
    }
    document.addEventListener('scroll', checkBottom)
    return () => document.removeEventListener('scroll', checkBottom)
  }, [func, stop])
}
