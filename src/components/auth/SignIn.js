import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchsession } from '../../redux/sessions/sessions';
import { update } from '../../redux/sessions/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const sessionState = useSelector((state) => state.sign_in);
  const nav = useNavigate();
  const [login, setLogin] = useState({
    user: {
      email: '',
      password: '',
    },
  });

  const controlSession = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState.user,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(fetchsession(login));
    dispatch(update());
    nav('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 login">
      <form className="gap-3 d-flex flex-column form-container card p-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex justify-content-center">
          <h3>Login</h3>
        </div>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            name="email"
            value={login.user.email}
            onChange={controlSession}
          />
        </div>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={login.user.password}
            onChange={controlSession}
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" className="mb-2 btn btn-primary" value="Submit" />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <Link to="/signup">Want to sign up?</Link>
        </div>
        {sessionState.isLoading && <p>Loading...</p>}
        {sessionState.error && (
          <p>
            Error:
            {sessionState.error}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
