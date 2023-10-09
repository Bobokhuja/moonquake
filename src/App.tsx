import { Moon } from '@components/Moon'
import { useNakamura } from '@store/nakamura/useNakamura.ts'
import { useEffect } from 'react'
import { getNakamura } from './api/getNakamura.ts'
import { Navigation } from '@components/Navigation'

function App() {
  const nakamura = useNakamura()

  useEffect(() => {
    getNakamura()
      .then(response => nakamura.loadNakamuraList({list: response, status: 'fulfilled'}))
      .catch(() => nakamura.loadNakamuraList({list: [], status: 'rejected'}))
  }, [])

  if (nakamura.status !== 'fulfilled') {
    return <p>loading...</p>
  }

  return (
    <>
      <Navigation/>
      <Moon/>
    </>
  )
}

export default App
