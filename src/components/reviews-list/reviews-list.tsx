import ReviewsItem from '../reviews-item/reviews-item';
import { ReviewItemType } from '../../types/offer';

type ReviewsListProps = {
  reviews: ReviewItemType[];
}

//TODO: Эта функция больше нигде не используется кроме этого компонента,не знаю есть ли смысл выносить ее в файл с утилками или нет
function sortByDate(a: ReviewItemType, b: ReviewItemType): number {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const sortedReviews = reviews.sort(sortByDate);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewsList;
