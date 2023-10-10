import { Menu } from '@components/Menu'
import './navigation.scss'
import clsx from 'clsx'
import { useMenu } from '@store/menu/useMenu.ts'
import { Nakamura } from '@components/Nakamura'

function Navigation() {
  const {open} = useMenu()
  return (
    <div className={clsx('navigation', open && 'navigation_active')}>
      <Menu/>
      <div className="navigation__main">
        {open === 'list' && <Nakamura/>}
      </div>
    </div>
  )
}

export { Navigation }