import { NakamuraContext } from '@store/nakamura/NakamuraContext.tsx'
import { PropsWithChildren, useReducer } from 'react'
import { nakamuraInitialState, nakamuraReducer } from '@store/nakamura/nakamuraReducer.ts'
import { INakamura } from '@models/INakamura.ts'
import { NakamuraActions } from '@store/nakamura/nakamuraActions.ts'
import { LoadNakamuraListActionType } from '@store/nakamura/NakamuraContextType.ts'

function NakamuraProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useReducer(nakamuraReducer, nakamuraInitialState)

  return (
    <NakamuraContext.Provider value={{
      list: state.list,
      selected: state.selected,
      status: state.status,
      loadNakamuraList(data: LoadNakamuraListActionType) {
        dispatch({type: NakamuraActions.LOAD_NAKAMURA_LIST, payload: data})
      },
      selectNakamura(nakamura: INakamura) {
        dispatch({type: NakamuraActions.SELECT_NAKAMURA_ITEM, payload: nakamura})
      },
      unselectNakamura(nakamura: INakamura) {
        dispatch({type: NakamuraActions.UNSELECT_NAKAMURA_ITEM, payload: nakamura})
      },
      toggleNakamura(nakamura: INakamura) {
        dispatch({type: NakamuraActions.TOGGLE_NAKAMURA_ITEM, payload: nakamura})
      },
      isExistsNakamura(nakamura: INakamura) {
        return state.list.some(({date}) => date === nakamura.date)
      },
    }}>
      {children}
    </NakamuraContext.Provider>
  )
}

export { NakamuraProvider }