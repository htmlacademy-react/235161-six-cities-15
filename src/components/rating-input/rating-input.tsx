import { RatingType } from '../../const';

type RatingItemProps = {
  rating: RatingType;
  checkedValue: string;
  isDisabled: boolean;
  onRatingChange: (newRating: number) => void;
}

function RatingInput({rating, checkedValue, isDisabled, onRatingChange}: RatingItemProps): JSX.Element {
  const {value, title} = rating;

  const handleChange = () => {
    onRatingChange(Number(value));
  };

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={checkedValue === value}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingInput;
