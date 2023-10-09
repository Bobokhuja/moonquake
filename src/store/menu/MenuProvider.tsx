import { PropsWithChildren, useReducer } from 'react'
import { menuInitialState, menuReducer } from '@store/menu/menuReducer.ts'
import { MenuContext } from '@store/menu/MenuContext.tsx'
import { MenuType } from '@store/menu/MenuContextType.ts'
import { MenuActions } from '@store/menu/menuActions.ts'

function MenuProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useReducer(menuReducer, menuInitialState)

  return (
    <MenuContext.Provider value={{
      open: state.open,
      openMenu(type: MenuType) {
        dispatch({type: MenuActions.OPEN_MENU, payload: type})
      },
      closeMenu() {
        dispatch({type: MenuActions.CLOSE_MENU})
      }
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuProvider }