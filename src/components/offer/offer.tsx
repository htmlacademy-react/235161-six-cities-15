import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { OfferType } from '../../types/offer';

type OfferProps = {
  currentOffer: OfferType;
}

function Offer({currentOffer}: OfferProps): JSX.Element {
  const {bedrooms, description, comments, goods, maxAdults, price, title, type, isFavorite, isPremium} = currentOffer;
  const activeBookmarkBtnClass: string = 'offer__bookmark-button--active';

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {title}
          </h1>
          <button className={`offer__bookmark-button button ${isFavorite ? activeBookmarkBtnClass : ''}`} type="button">
            <svg className="offer__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">4.8</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {`${bedrooms} Bedrooms`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${maxAdults} adults`}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <OfferInsideList insideOffers={goods}/>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
              <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
            </div>
            <span className="offer__user-name">
              Angelina
            </span>
            <span className="offer__user-status">
              Pro
            </span>
          </div>
          <div className="offer__description">
            <p className="offer__text">
              {description}
            </p>
          </div>
        </div>
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

          <ReviewsList reviews={comments} />

          <ReviewsForm />
        </section>
      </div>
    </div>
  );
}

export default Offer;
