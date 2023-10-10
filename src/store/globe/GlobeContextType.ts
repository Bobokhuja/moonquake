import { GlobeMethods } from 'react-globe.gl'

export interface GlobeContextType {
  globe: GlobeMethods | undefined

  setGlobe(globe: GlobeMethods): void
}