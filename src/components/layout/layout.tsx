import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Logo from '../logo/logo';

function getContainerClassName(isLoginPage: boolean, isFavoritePage: boolean, isOfferPage: boolean): string {
  let containerClassName = 'page';

  if (isOfferPage || isFavoritePage) {
    return containerClassName;
  }

  if (isLoginPage) {
    containerClassName += 'page--gray page--login';
    return containerClassName;
  }

  containerClassName += 'page--gray page--main';

  return containerClassName;
}

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isLoginPage = pathname === AppRoutes.Login;
  const isFavoritePage = pathname === AppRoutes.Favorites;
  const isOfferPage = pathname === AppRoutes.Offer;
  const containerClassName = getContainerClassName(isLoginPage, isFavoritePage, isOfferPage);

  return (
    <div className={containerClassName}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            {isLoginPage ? null : (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
      <Outlet />
      {isFavoritePage ? (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoutes.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      ) : null}
    </div>
  );
}

export default Layout;
