import { Moon } from '@components/Moon'
import { useNakamura } from '@store/nakamura/useNakamura.ts'
import { useEffect, useRef } from 'react'
import { getNakamura } from './api/getNakamura.ts'
import { Navigation } from '@components/Navigation'
import { GlobeMethods } from 'react-globe.gl'
import { GlobeProvider } from '@store/globe/GlobeProvider.tsx'

function App() {
  const nakamura = useNakamura()
  const globeRef = useRef<GlobeMethods | undefined>()

  useEffect(() => {
    getNakamura()
      .then(response => nakamura.loadNakamuraList({list: response, status: 'fulfilled'}))
      .catch(() => nakamura.loadNakamuraList({list: [], status: 'rejected'}))
  }, [])

  if (nakamura.status !== 'fulfilled') {
    return <p>loading...</p>
  }

  return (
    <GlobeProvider>
      <Navigation/>
      <Moon globeRef={globeRef}/>
    </GlobeProvider>
  )
}

export default App
