import { NakamuraProvider } from '@store/nakamura/NakamuraProvider.tsx'
import { PropsWithChildren } from 'react'
import { MenuProvider } from '@store/menu/MenuProvider.tsx'

function Providers({children}: PropsWithChildren) {
  return (
    <MenuProvider>
      <NakamuraProvider>
        {children}
      </NakamuraProvider>
    </MenuProvider>
  )
}

export { Providers }