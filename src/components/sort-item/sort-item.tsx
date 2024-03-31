import { MouseEvent, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentSortingType } from '../../store/selectors/sorting-selectors';
import { changeSorting } from '../../store/action';
import { SortType } from '../../const';

type SortItemProps = {
  sortType: SortType;
}

const SortItem = memo(({sortType}: SortItemProps): JSX.Element => {
  const {name} = sortType;
  const activeSortType = useAppSelector(getCurrentSortingType);
  const activeSortTypeClass = 'places__option--active';
  const dispatch = useAppDispatch();

  function handleSortTypeClick (evt: MouseEvent<HTMLElement>) {
    const target = evt.target as HTMLElement;
    const sortingType = target.textContent;

    if (sortingType) {
      dispatch(changeSorting({sorting: sortingType}));
    }
  }

  return (
    <li
      key={name}
      className={`places__option ${activeSortType === name ? activeSortTypeClass : ''}`}
      onClick={handleSortTypeClick}
      tabIndex={0}
    >
      {name}
    </li>
  );
});

SortItem.displayName = 'SortItem';

// function SortItem({sortType}: SortItemProps): JSX.Element {
//   const {name} = sortType;
//   const activeSortType = useAppSelector(getCurrentSortingType);
//   const activeSortTypeClass = 'places__option--active';
//   const dispatch = useAppDispatch();

//   function handleSortTypeClick(evt: MouseEvent<HTMLElement>) {
//     const target = evt.target as HTMLElement;
//     const sortingType = target.textContent;

//     if (sortingType) {
//       dispatch(changeSorting({sorting: sortingType}));
//     }
//   }

//   return (
//     <li
//       key={name}
//       className={`places__option ${activeSortType === name ? activeSortTypeClass : ''}`}
//       onClick={handleSortTypeClick}
//       tabIndex={0}
//     >
//       {name}
//     </li>
//   );
// }

export default SortItem;
