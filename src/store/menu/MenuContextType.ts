export type MenuType = 'list' | 'timeline' | 'settings'

export interface MenuContextType {
  open: false | MenuType

  openMenu(type: MenuType): void

  closeMenu(): void
}