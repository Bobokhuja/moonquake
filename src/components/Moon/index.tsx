import Globe from 'react-globe.gl'
import { useWindowSize } from 'usehooks-ts'
import { useNakamura } from '@store/nakamura/useNakamura.ts'
import { useMenu } from '@store/menu/useMenu.ts'

function Moon() {
  /** size for canvas*/
  const {width, height} = useWindowSize()
  const nakamura = useNakamura()
  const {open} = useMenu()

  return (
    <Globe
      width={open ? width - 500 : width}
      height={height}
      globeImageUrl="/images/lunar_surface.jpg"
      bumpImageUrl="/images/lunar_bumpmap.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pointsData={nakamura.selected}
      onGlobeClick={() => {
        nakamura.toggleNakamura(nakamura.list[Math.floor(Math.random() * nakamura.list.length - 1)])
      }}
    />
  )
}

export { Moon }