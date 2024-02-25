import { Link } from 'react-router-dom';

type PlaceCardType = {
  id: number | string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
}

type PlaceCardProps = {
  placeCard: PlaceCardType;
  className?: string;
  imgPreviewWidth?: number;
  imgPreviewHeight?: number;
}

function PremiumMark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard({placeCard, className = 'cities', imgPreviewWidth = 260, imgPreviewHeight = 200}: PlaceCardProps): JSX.Element {
  const {id, title, type, price, previewImage, isPremium, isFavorite} = placeCard;
  const activeBookmarkBtnClass: string = 'place-card__bookmark-button--active';

  return (
    <article className={`${className}__card place-card`}>
      {isPremium && <PremiumMark/>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgPreviewWidth}
            height={imgPreviewHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            {' '}
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && activeBookmarkBtnClass} button`} type="button">
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
