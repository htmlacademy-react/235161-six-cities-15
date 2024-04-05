import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatus } from '../../store/api-actions';
import { getAuthStatus } from '../../store/selectors/authorization-selectors';
import { getChangeFavoritesLoadingStatus } from '../../store/selectors/favorites-selectors';
import { AppRoutes, AuthorizationStatus } from '../../const';

type BookmarkButtonProps = {
  id: string;
  isFavorite: boolean;
  className?: string;
}

const BookmarkButton = memo(({id, isFavorite, className = 'place-card'}: BookmarkButtonProps): JSX.Element => {

  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getChangeFavoritesLoadingStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleBookmarkButtonClick() {

    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoutes.Login);
      return;
    }

    dispatch(changeFavoriteStatus({
      id: id,
      isFavorite: Number(!isFavorite)
    }));
  }

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`}
      type="button"
      onClick={handleBookmarkButtonClick}
      disabled={isLoading}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={className === 'offer' ? 31 : 18}
        height={className === 'offer' ? 33 : 19}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
});

BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
