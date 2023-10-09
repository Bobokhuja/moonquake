import { LoadNakamuraListActionType, NakamuraContextType } from '@store/nakamura/NakamuraContextType.ts'
import { NakamuraActions } from '@store/nakamura/nakamuraActions.ts'
import { INakamura } from '@models/INakamura.ts'

export const nakamuraInitialState: NakamuraContextType = {
  list: [],
  selected: [],
  status: 'pending',
  loadNakamuraList() {
  },
  selectNakamura() {
  },
  toggleNakamura() {
  },
  unselectNakamura() {
  },
  isExistsNakamura() {
  },
}

type ActionType = {
  type: NakamuraActions
  payload: INakamura | LoadNakamuraListActionType
}

export function nakamuraReducer(state: NakamuraContextType, action: ActionType): NakamuraContextType {
  let {payload} = action

  switch (action.type) {
    case NakamuraActions.LOAD_NAKAMURA_LIST: {
      payload = payload as LoadNakamuraListActionType
      return {
        ...state,
        ...payload,
      }
    }
    case NakamuraActions.SELECT_NAKAMURA_ITEM:
      payload = payload as INakamura
      return {
        ...state,
        selected: state.selected.concat(payload),
      }
    case NakamuraActions.UNSELECT_NAKAMURA_ITEM: {
      const {date} = payload as INakamura
      return {
        ...state,
        selected: state.selected.filter(item => item.date !== date),
      }
    }

    case NakamuraActions.TOGGLE_NAKAMURA_ITEM: {
      const {date, ...props} = payload as INakamura
      return {
        ...state,
        selected: state.selected.some(item => item.date === date)
          ? state.selected.filter(item => item.date !== date)
          : state.selected.concat({date, ...props})
      }
    }
  }
}