import axios, { AxiosResponse } from 'axios'
import { IStation } from '@models/IStation.ts'

export async function getStations(): Promise<IStation[]> {
  const response: AxiosResponse<IStation[]> = await axios.get('/data/Apollo_seismic_network.json')
  return response.data
}