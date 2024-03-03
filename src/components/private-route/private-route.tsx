import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute({authorizationStatus, children, isReverse}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoutes.Main : AppRoutes.Login} />
  );
}

export default PrivateRoute;
