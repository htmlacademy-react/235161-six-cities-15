type ReviewItemType = {
  id: string | number;
  avatar: string;
  userName: string;
  reviewText: string;
  dateTime: string;
  date: string;
}

type ReviewsItemProps = {
  review: ReviewItemType;
}

function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {avatar, userName, reviewText, dateTime, date} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{date}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
