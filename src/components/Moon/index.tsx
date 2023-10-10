import Globe, { GlobeMethods } from 'react-globe.gl'
import { useWindowSize } from 'usehooks-ts'
import { useNakamura } from '@store/nakamura/useNakamura.ts'
import { useMenu } from '@store/menu/useMenu.ts'
import { MutableRefObject } from 'react'
import { useGlobe } from '@store/globe/useGlobe.ts'

interface Props {
  globeRef: MutableRefObject<GlobeMethods | undefined>
}

function Moon({globeRef}: Props) {
  /** size for canvas*/
  const {width, height} = useWindowSize()
  const nakamura = useNakamura()
  const {open} = useMenu()
  const globe = useGlobe()

  return (
    <Globe
      ref={globeRef}
      width={open ? width - 500 : width}
      height={height}
      globeImageUrl="/images/lunar_surface.jpg"
      bumpImageUrl="/images/lunar_bumpmap.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pointsData={nakamura.selected}
      onGlobeReady={() => {
        if (globeRef.current) {
          globe.setGlobe(globeRef.current)
        }
      }}
    />
  )
}

export { Moon }