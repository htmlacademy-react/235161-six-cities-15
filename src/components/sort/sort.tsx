import { SORT } from '../../const';

function Sort(): JSX.Element {
  const activeSortTypeClass = 'places__option--active';
  const placesOptionsItems = SORT.map((sortType) =>
    <li key={sortType.name} className={`places__option ${sortType.isActive && activeSortTypeClass}`} tabIndex={0}>{sortType.name}</li>
  );

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
