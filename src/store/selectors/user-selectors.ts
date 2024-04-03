import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { LoggedUserType } from '../../types/authorization';

export const getUserData = (state: State): LoggedUserType | null => state[NameSpace.User].userData;
