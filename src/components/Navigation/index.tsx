import { Menu } from '@components/Menu'
import './navigation.scss'
import clsx from 'clsx'
import { useMenu } from '@store/menu/useMenu.ts'

function Navigation() {
  const {open} = useMenu()
  return (
    <div className={clsx('navigation', open && 'navigation_active')}>
      <Menu/>
      <div className="navigation__main">

      </div>
    </div>
  )
}

export { Navigation }