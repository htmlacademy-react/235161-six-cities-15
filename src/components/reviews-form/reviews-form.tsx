import { useState, ChangeEvent } from 'react';
import { RATINGS } from '../../const';
import RatingInput from '../../components/rating-input/rating-input';

const MIN_COMMENT_SYMBOLS_COUNT = 50;

type ReviewFormData = {
  review: string;
}

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewFormData>({
    review: '',
  });

  const handleCommentFieldChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating) => <RatingInput key={rating.value} rating={rating}/>)}
      </div>
      <textarea
        onChange={handleCommentFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_COMMENT_SYMBOLS_COUNT}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
