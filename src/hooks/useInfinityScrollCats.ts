import { useEffect, useState } from 'react'

import { getCats } from '../api/requests'
import { type Cat } from '../types/Cat'

export function useInfinityScroll(limit: number = 20) {
  const [cats, setCats] = useState<Cat[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  async function fetchData() {
    try {
      setLoading(true)
      const { data } = await getCats(limit, page)
      setCats(cats => [...cats, ...data])
      setPage(page => page + 1)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  function handleEnd() {
    if (loading) return
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      fetchData()
    }
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  useEffect(() => {
    if (window.innerHeight > document.documentElement.offsetHeight) {
      handleEnd()
    }
    window.addEventListener('scroll', handleEnd)
    return () => window.removeEventListener('scroll', handleEnd)
  }, [loading])

  return { cats, loading }
}
