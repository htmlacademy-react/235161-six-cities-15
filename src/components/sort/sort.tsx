import { useState } from 'react';
import { SORT, SortType } from '../../const';

type SortItemProps = {
  sortType: SortType;
}

function SortItem({sortType}: SortItemProps): JSX.Element {
  const {name, isActive} = sortType;
  const activeSortTypeClass = 'places__option--active';

  return (
    <li
      key={name}
      className={`places__option ${isActive ? activeSortTypeClass : ''}`}
      tabIndex={0}
    >
      {name}
    </li>
  );
}

function Sort(): JSX.Element {
  const [isOptionsOpened, setOptionsOpened] = useState<boolean>(false);

  function handleSortOptionsClick() {
    setOptionsOpened(!isOptionsOpened);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span
        className="places__sorting-type"
        onClick={handleSortOptionsClick}
        tabIndex={0}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOptionsOpened ? 'places__options--opened' : ''}`}>
        {SORT.map((sortType) => <SortItem key={sortType.name} sortType={sortType}/>)}
      </ul>
    </form>
  );
}

export default Sort;
