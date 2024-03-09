import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { OfferType } from '../../types/offer';

//TODO: УДОЛИ!1!!!11 P.S.: Я удалю комменты, просто второе задание начал делать в этом же пуллреквесте :D
// const INSIDE_OFFERS: string[] = [
//   'Wi-Fi',
//   'Washing machine',
//   'Towels',
//   'Heating',
//   'Coffee machine',
//   'Baby seat',
//   'Kitchen',
//   'Dishwasher',
//   'Cabel TV',
//   'Fridge'
// ];

// const GALLERY_IMAGES: string[] = [
//   'img/room.jpg',
//   'img/apartment-01.jpg',
//   'img/apartment-02.jpg',
//   'img/apartment-03.jpg',
//   'img/studio-01.jpg',
//   'img/apartment-01.jpg'
// ];

// const REVIEWS = [
//   {
//     id: 1,
//     date: 'April 2019',
//     user: {
//       name: 'Max',
//       avatarUrl: 'img/avatar-max.jpg',
//       isPro: false
//     },
//     comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
//     rating: 4,
//   }
// ];

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
              {/* //TODO: УДОЛИ!1!! */}
              {/* A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. */}
            </p>
            {/* <p className="offer__text">
              An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
            </p> */}
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
