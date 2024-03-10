import ReviewsItem from '../reviews-item/reviews-item';
import { ReviewItemType } from '../../types/offer';

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
