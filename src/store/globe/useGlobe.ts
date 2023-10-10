import { useContext } from 'react'
import { GlobeContext } from '@store/globe/GlobeContext.tsx'

export function useGlobe() {
  return useContext(GlobeContext)
}