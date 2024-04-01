import { Link } from 'react-router-dom';
import { memo } from 'react';
import { OfferType } from '../../types/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  offer: OfferType;
  onHover?: (offer?: OfferType) => void | null;
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

const PlaceCard = memo(({offer, onHover, className = 'cities', imgPreviewWidth = 260, imgPreviewHeight = 200}: PlaceCardProps): JSX.Element => {
  const {id, title, type, price, rating, previewImage, isPremium, isFavorite} = offer;
  // const activeBookmarkBtnClass: string = 'place-card__bookmark-button--active';

  const handleMouseOver = () => {
    if (onHover) {
      onHover(offer);
    }
  };

  const handleMouseOut = () => {
    if (onHover) {
      onHover();
    }
  };

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
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
          <BookmarkButton id={id} isFavorite={isFavorite} />
          {/* <button className={`place-card__bookmark-button ${isFavorite && activeBookmarkBtnClass} button`} type="button">
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button> */}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * Math.round(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
});

PlaceCard.displayName = 'PlaceCard';

export default PlaceCard;

// function PlaceCard({offer, onHover, className = 'cities', imgPreviewWidth = 260, imgPreviewHeight = 200}: PlaceCardProps): JSX.Element {
//   const {id, title, type, price, rating, previewImage, isPremium, isFavorite} = offer;
//   const activeBookmarkBtnClass: string = 'place-card__bookmark-button--active';

//   const handleMouseOver = () => {
//     if (onHover) {
//       onHover(offer);
//     }
//   };

//   const handleMouseOut = () => {
//     if (onHover) {
//       onHover();
//     }
//   };

//   return (
//     <article
//       className={`${className}__card place-card`}
//       onMouseEnter={handleMouseOver}
//       onMouseLeave={handleMouseOut}
//     >
//       {isPremium && <PremiumMark/>}
//       <div className={`${className}__image-wrapper place-card__image-wrapper`}>
//         <Link to={`/offer/${id}`}>
//           <img
//             className="place-card__image"
//             src={previewImage}
//             width={imgPreviewWidth}
//             height={imgPreviewHeight}
//             alt="Place image"
//           />
//         </Link>
//       </div>
//       <div className="place-card__info">
//         <div className="place-card__price-wrapper">
//           <div className="place-card__price">
//             <b className="place-card__price-value">&euro;{price}</b>
//             {' '}
//             <span className="place-card__price-text">&#47;&nbsp;night</span>
//           </div>
//           <button className={`place-card__bookmark-button ${isFavorite && activeBookmarkBtnClass} button`} type="button">
//             <svg
//               className="place-card__bookmark-icon"
//               width="18"
//               height="19"
//             >
//               <use xlinkHref="#icon-bookmark"></use>
//             </svg>
//             <span className="visually-hidden">To bookmarks</span>
//           </button>
//         </div>
//         <div className="place-card__rating rating">
//           <div className="place-card__stars rating__stars">
//             <span style={{width: `${20 * rating}%`}}></span>
//             <span className="visually-hidden">Rating</span>
//           </div>
//         </div>
//         <h2 className="place-card__name">
//           <Link to={`/offer/${id}`}>{title}</Link>
//         </h2>
//         <p className="place-card__type">{type}</p>
//       </div>
//     </article>
//   );
// }
