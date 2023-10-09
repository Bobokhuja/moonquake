import { createContext } from 'react'
import { NakamuraContextType } from '@store/nakamura/NakamuraContextType.ts'
import { nakamuraInitialState } from '@store/nakamura/nakamuraReducer.ts'

export const NakamuraContext = createContext<NakamuraContextType>(nakamuraInitialState)