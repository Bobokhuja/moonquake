import { useContext } from 'react'
import { NakamuraContext } from '@store/nakamura/NakamuraContext.tsx'

function useNakamura() {
  return useContext(NakamuraContext)
}

export { useNakamura }