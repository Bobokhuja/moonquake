import { createContext } from 'react'
import { GlobeContextType } from '@store/globe/GlobeContextType.ts'

export const GlobeContext = createContext<GlobeContextType>({
  globe: undefined,
  setGlobe() {
  }
})