import { INakamura } from '@models/INakamura.ts'
import { FetchStatus } from '@lib/FetchStatus.ts'

export type LoadNakamuraListActionType = {
  list: INakamura[]
  status: FetchStatus
}

export interface NakamuraContextType {
  list: INakamura[]
  selected: INakamura[]
  status: FetchStatus

  loadNakamuraList(data: LoadNakamuraListActionType): void

  selectNakamura(nakamura: INakamura): void

  unselectNakamura(nakamura: INakamura): void

  toggleNakamura(nakamura: INakamura): void

  isExistsNakamura(nakamura: INakamura): void
}