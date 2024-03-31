import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { postReview } from '../../store/api-actions';
import { getCurrentOfferId, getPostLoadingStatus, getPostErrorStatus } from '../../store/selectors/offers-selectors';
import RatingInput from '../../components/rating-input/rating-input';
import { RATINGS } from '../../const';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

type ReviewFormData = {
  review: string;
  rating: number;
}

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = useAppSelector(getCurrentOfferId);
  const commentPostErrorStatus = useAppSelector(getPostErrorStatus);
  const postLoadingStatus = useAppSelector(getPostLoadingStatus);

  const [formData, setFormData] = useState<ReviewFormData>({
    review: '',
    rating: 0,
  });

  const isValid: boolean =
    formData.review.length >= MIN_COMMENT_LENGTH &&
    formData.review.length <= MAX_COMMENT_LENGTH &&
    formData.rating !== 0;

  const handleCommentFieldChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, review: value});
  };

  const handleRatingChange = (newRating: number) => {
    setFormData({ ...formData, rating: newRating });
  };

  const handleReviewFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (id) {
      dispatch(postReview({id: id, reviewData: formData}));
    }

    if (!commentPostErrorStatus) {
      setFormData({
        review: '',
        rating: 0,
      });
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleReviewFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((ratingItem) => <RatingInput key={ratingItem.value} onRatingChange={handleRatingChange} rating={ratingItem} checkedValue={String(formData.rating)}/>)}
      </div>
      <textarea
        onChange={handleCommentFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formData.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || postLoadingStatus}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
