import { State } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.Authorization].authStatus;
export const getAuthErrorStatus = (state: State): boolean => state[NameSpace.Authorization].authErrorStatus;
export const getAuthLoadingStatus = (state: State): boolean => state[NameSpace.Authorization].authLoadingStatus;
