import { memo } from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import { ReviewItemType } from '../../types/offer';

type ReviewsListProps = {
  reviews: ReviewItemType[];
}

const ReviewsList = memo(({reviews}: ReviewsListProps): JSX.Element =>
  (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
    </ul>
  )
);

ReviewsList.displayName = 'ReviewsList';

export default ReviewsList;
