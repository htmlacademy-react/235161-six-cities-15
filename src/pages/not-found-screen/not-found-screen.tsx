import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="error-screen">
      <h2 className="error-screen--title">Page not found</h2>
      <img className="error-screen--image" src='public/img/peppo-crying.jpg' width='400' height='400' alt='Картинка сообщающая об ошибке' />
      <span className="error-screen--back">
        <Link to={AppRoutes.Main}>
          Back to main page
        </Link>
      </span>
    </section>
  );
}

export default NotFoundScreen;
