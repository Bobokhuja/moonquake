import { createContext } from 'react'
import { MenuContextType } from '@store/menu/MenuContextType.ts'
import { menuInitialState } from '@store/menu/menuReducer.ts'

export const MenuContext = createContext<MenuContextType>(menuInitialState)