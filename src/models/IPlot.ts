export type IPlot = {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        doy: string
        stations: string[]
      }
    }
  }
}