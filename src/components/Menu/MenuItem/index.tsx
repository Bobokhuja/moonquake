import { HTMLAttributes } from 'react'
import './menuItem.scss'
import clsx from 'clsx'

interface Props extends HTMLAttributes<HTMLButtonElement>{
  name: string
  title: string
  isActive?: boolean
}

function MenuItem({name, title, isActive, ...props}: Props) {
  return (
    <button
      className={clsx('menu__item', isActive && 'menu__item_active')}
      {...props}
    >
      <img
        className="menu__icon"
        src={`/icons/${name}.svg`}
        alt=""
        width={24}
        height={24}
      />
      {title}
    </button>
  )
}

export { MenuItem }