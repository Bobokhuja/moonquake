import axios, { AxiosResponse } from 'axios'
import { INakamura } from '@models/INakamura.ts'

export async function getNakamura(): Promise<INakamura[]> {
  const response: AxiosResponse<INakamura[]> = await axios.get('/data/nakamura_1979_sm_locations.json')
  return response.data
}