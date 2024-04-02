import { Navigate, Location, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoutes } from '../../const';
import { getUserData } from '../../store/selectors/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

type LocationType = {
  from?: Location;
}

function PrivateRoute({children, isReverse}: PrivateRouteProps): JSX.Element {
  const userData = useAppSelector(getUserData);
  const location: Location<LocationType> = useLocation() as Location<LocationType>;

  if (userData && isReverse) {
    const from = location.state?.from || {pathname: AppRoutes.Main};
    return <Navigate to={from} />;
  }

  if (!userData && !isReverse) {
    return <Navigate state={{ from: location}} to={AppRoutes.Login} />;
  }

  return children;
  // const authStatus = useAppSelector(getAuthStatus);

  // return (
  //   authStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
  //     ? children
  //     : <Navigate to={isReverse ? AppRoutes.Main : AppRoutes.Login} />
  // );
}

export default PrivateRoute;
