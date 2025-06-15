import { useEffect } from 'react'

export function useRefreshOnResize() {
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.location.reload()
    })
  }, [])
}
