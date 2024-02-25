import { RatingType } from '../../const';

type RatingItemProps = {
  rating: RatingType;
}

function RatingInput({rating}: RatingItemProps): JSX.Element {
  const {value, title} = rating;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingInput;
