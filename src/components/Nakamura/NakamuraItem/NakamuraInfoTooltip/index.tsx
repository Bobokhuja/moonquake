import './nakamuraInfoTooltip.scss'
import { INakamura } from '@models/INakamura.ts'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends HTMLAttributes<HTMLDivElement> {
  nakamura: INakamura
}

function NakamuraInfoTooltip({nakamura, className, ...props}: Props) {

  const {label, lat, lng, magnitude, date} = nakamura
  return (
    <div className={clsx('nakamura-info-tooltip', className)} {...props}>
      <h3 className="nakamura-info-tooltip__label">{label}</h3>
      <dl className="nakamura-info-tooltip__list">
        <div className="nakamura-info-tooltip__item">
          <dt className="nakamura-info-tooltip__title">Latitude:</dt>
          <dt className="nakamura-info-tooltip__value">{lat}</dt>
        </div>
        <div className="nakamura-info-tooltip__item">
          <dt className="nakamura-info-tooltip__title">Longitude:</dt>
          <dt className="nakamura-info-tooltip__value">{lng}</dt>
        </div>
        <div className="nakamura-info-tooltip__item">
          <dt className="nakamura-info-tooltip__title">Magnitude:</dt>
          <dt className="nakamura-info-tooltip__value">{magnitude}</dt>
        </div>
        <div className="nakamura-info-tooltip__item">
          <dt className="nakamura-info-tooltip__title">Date:</dt>
          <dt className="nakamura-info-tooltip__value">{new Date(date).toLocaleString('en')}</dt>
        </div>
      </dl>
    </div>
  )
}

export { NakamuraInfoTooltip }