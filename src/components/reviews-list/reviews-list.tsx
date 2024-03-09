import ReviewsItem from '../reviews-item/reviews-item';
import { ReviewItemType } from '../../types/offer';
//TODO: УДОЛИ, НЕ ЗАБУДЬ!1!!
// type UserType = {
//   name: string;
//   avatarUrl: string;
//   isPro?: boolean;
// }

// type ReviewItemType = {
//   id: string | number;
//   date: string;
//   user: UserType;
//   comment: string;
//   rating: number;
// }

type ReviewsListProps = {
  reviews: ReviewItemType[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewsList;
