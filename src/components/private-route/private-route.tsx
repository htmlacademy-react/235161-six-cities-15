import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {AppRoutes, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute({children, isReverse}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.AUTHORIZATION.authStatus);

  return (
    authStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoutes.Main : AppRoutes.Login} />
  );
}

export default PrivateRoute;
