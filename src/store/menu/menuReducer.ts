import { MenuContextType, MenuType } from '@store/menu/MenuContextType.ts'
import { MenuActions } from '@store/menu/menuActions.ts'

export const menuInitialState: MenuContextType = {
  open: false,
  closeMenu() {
  },
  openMenu() {
  }
}

type ActionType = {
  type: MenuActions
  payload?: MenuType
}

export function menuReducer(state: MenuContextType, action: ActionType): MenuContextType {
  const {payload, type} = action

  switch (type) {
    case MenuActions.OPEN_MENU: {
      const type = payload as MenuType
      return {
        ...state,
        open: type,
      }
    }
    case MenuActions.CLOSE_MENU:
      return {
        ...state,
        open: false,
      }
  }
}