import axios, { AxiosResponse } from 'axios'
import { IPlot } from '@models/IPlot.ts'

export async function getPlots(): Promise<IPlot[]> {
  const response: AxiosResponse<IPlot[]> = await axios.get('/data/plots.json')
  return response.data
}