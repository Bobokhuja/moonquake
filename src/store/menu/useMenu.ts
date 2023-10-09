import { useContext } from 'react'
import { MenuContext } from '@store/menu/MenuContext.tsx'

function useMenu() {
  return useContext(MenuContext)
}

export { useMenu }