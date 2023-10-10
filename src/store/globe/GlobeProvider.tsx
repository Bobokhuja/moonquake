import { PropsWithChildren, useState } from 'react'
import { GlobeContext } from '@store/globe/GlobeContext.tsx'
import { GlobeMethods } from 'react-globe.gl'

function GlobeProvider({children}: PropsWithChildren) {
  const [globe, setGlobe] = useState<GlobeMethods | undefined>()
  return (
    <GlobeContext.Provider value={{
      globe,
      setGlobe,
    }}>
      {children}
    </GlobeContext.Provider>
  )
}

export { GlobeProvider }