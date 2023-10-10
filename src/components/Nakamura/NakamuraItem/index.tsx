import './nakamuraItem.scss'
import { useNakamura } from '@store/nakamura/useNakamura.ts'
import { INakamura } from '@models/INakamura.ts'
import { NakamuraInfoTooltip } from '@components/Nakamura/NakamuraItem/NakamuraInfoTooltip'

interface Props {
  nakamura: INakamura
}

function NakamuraItem({nakamura}: Props) {
  const {toggleNakamura, isExistsNakamura} = useNakamura()

  return (
    <li className="nakamura__item">
      <label className="nakamura__label">
        <input
          className="nakamura__input"
          type="checkbox"
          checked={isExistsNakamura(nakamura)}
          onChange={() => {
            toggleNakamura(nakamura)
          }}
        />
        <span className="nakamura__checkmark"/>
        {nakamura.date}
        <div className="nakamura__tools">
          <button
            className="nakamura__button nakamura__button_show"
            onClick={() => {
              // globeContext?.pointOfView(lat, lng, 1)
              // if (!isActive) {
              //   dispatch(toggleNakamuraItem(date))
              // }
            }}
          >
            <img
              src="/icons/eye.svg"
              alt="Показать на карте"
              width={24}
              height={24}
            />
          </button>
          <button className="nakamura__button nakamura__button_info">
            <img
              src="/icons/info.svg"
              alt="Показать информацию"
              width={24}
              height={24}
            />
            <NakamuraInfoTooltip className="nakamura__tooltip" nakamura={nakamura}/>
          </button>
        </div>
      </label>
    </li>
  )
}

export { NakamuraItem }