import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/selectors/authorization-selectors';
import { getCurrentCity } from '../../store/selectors/city-selectors';
import { loginAction } from '../../store/api-actions';
import { AppRoutes } from '../../const';


function LoginScreen(): JSX.Element {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentCity = useAppSelector(getCurrentCity);
  const authErrorStatus = useAppSelector(getAuthStatus);

  const handleEmailInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const emailValue = evt.target.value;
    setEmail(emailValue);
  };

  const handlePasswordInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = evt.target.value;
    setPassword(passwordValue);
  };

  const handleSubmit = (evt: FormEvent<HTMLElement>) => {
    evt.preventDefault();

    if (email !== '' && password !== '') {
      dispatch(loginAction({
        email: email,
        password: password,
      }));

      if (!authErrorStatus) {
        navigate(AppRoutes.Main);
      }
    }
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>
          6 Cities. Login
        </title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                onChange={handleEmailInputChange}
                className="login__input form__input"
                type="email" name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                onChange={handlePasswordInputChange}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                pattern="[A-Za-z0-9]{2,}"
                title="Пароль должен состоять только из латинских букв и цифр, и быть не менее 2 символов в длину"
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoutes.Main}>
              <span>{currentCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
