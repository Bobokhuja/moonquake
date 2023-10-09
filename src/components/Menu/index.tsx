import { MenuItem } from '@components/Menu/MenuItem'
import { useMenu } from '@store/menu/useMenu.ts'
import { MenuType } from '@store/menu/MenuContextType.ts'
import './menu.scss'

function Menu() {
  const {open, openMenu, closeMenu} = useMenu()

  const openHandler = (name: MenuType) => () => {
    if (open === name) {
      closeMenu()
      return
    }
    openMenu(name)
  }
  const checkActive = (name: MenuType) => open === name

  return (
    <nav className="menu">
      <MenuItem
        name="list"
        title="Nakamura"
        onClick={openHandler('list')}
        isActive={checkActive('list')}
      />
      <MenuItem
        name="calendar"
        title="Timeline"
        onClick={openHandler('timeline')}
        isActive={checkActive('timeline')}
      />
    </nav>
  )
}

export { Menu }