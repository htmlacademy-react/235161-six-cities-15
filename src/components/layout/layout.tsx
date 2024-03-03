import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { AuthorizationStatus } from '../../const';

function getLayoutState(pathname: string) {
  let mainClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;

  if (pathname === AppRoutes.Main) {
    mainClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoutes.Favorites || pathname === AppRoutes.Offer) {
    mainClassName = '';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoutes.Login) {
    mainClassName = ' page--gray page--login';
    shouldRenderUser = false;
  }

  return {mainClassName, linkClassName, shouldRenderUser};
}

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProps): JSX.Element {
  const {pathname} = useLocation();
  const {mainClassName, linkClassName, shouldRenderUser} = getLayoutState(pathname);
  const isFavoritePage = pathname === AppRoutes.Favorites;

  return (
    <div className={`page${mainClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link${linkClassName}`} to={AppRoutes.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            {shouldRenderUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {authorizationStatus === AuthorizationStatus.Auth
                        ?
                        <>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </>
                        :
                        <span className="header__login">Sign in</span>}
                    </Link>
                  </li>
                  {authorizationStatus === AuthorizationStatus.Auth &&
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoutes.Login}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>}
                </ul>
              </nav>
            ) : null}
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
