import { SORT, SortType } from '../../const';

type SortItemProps = {
  sortType: SortType;
  activeSortTypeClass?: string;
}

function SortItem({sortType, activeSortTypeClass = 'places__option--active'}: SortItemProps): JSX.Element {
  const {name, isActive} = sortType;
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
  const placesOptionsItems = SORT.map((sortType) => <SortItem key={sortType.name} sortType={sortType}/>);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {placesOptionsItems}
      </ul>
    </form>
  );
}

export default Sort;
