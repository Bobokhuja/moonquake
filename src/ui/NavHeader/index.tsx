import './navHeader.scss'
import { HTMLAttributes } from 'react'
import { useMenu } from '@store/menu/useMenu.ts'

function NavHeader(props: HTMLAttributes<HTMLElement>) {
  const {closeMenu} = useMenu()
  return (
    <header className="nav-header">
      <h2 className="nav-header__title">{props.children}</h2>
      <button
        className="nav-header__close"
        onClick={closeMenu}
      >
        <img
          src="/icons/close.svg"
          alt=""
          width={20}
          height={20}
        />
      </button>
    </header>
  )
}

export { NavHeader }