import './nakamura.scss'
import { NavHeader } from '@ui/NavHeader'
import clsx from 'clsx'
import { useNakamura } from '@store/nakamura/useNakamura.ts'
import { NakamuraItem } from '@components/Nakamura/NakamuraItem'

function Nakamura() {
  const {list, selected, unselectAllNakamura, selectAllNakamura} = useNakamura()
  let status: 'all-selected' | 'some-selected' | 'cleaned' = 'some-selected'
  if (list.length === selected.length) {
    status = 'some-selected'
  } else if (selected.length === 0) {
    status = 'cleaned'
  }

  return (
    <div className="nakamura">
      <NavHeader>Nakamura</NavHeader>
      <div className="nakamura__buttons">
        <button
          className={clsx('nakamura__select', 'nakamura__select_' + status)}
          onClick={() => {
            if (list.length === selected.length) {
              unselectAllNakamura()
            } else {
              selectAllNakamura()
            }
          }}
        >
          <span/>
          Select all
        </button>
      </div>
      <ul className="nakamura__list">
        {list.map(item => (
          <NakamuraItem
            key={item.date}
            nakamura={item}
          />
        ))}
      </ul>
    </div>
  )
}

export { Nakamura }