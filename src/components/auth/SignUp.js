import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchreg } from '../../redux/sessions/registration';
import { update } from '../../redux/sessions/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const sessionState = useSelector((state) => state.sign_up);
  const [user, setUser] = useState({
    user: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const controlReg = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState.user,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(fetchreg(user));
    dispatch(update());
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 login">
      <form className="gap-3 d-flex flex-column form-container card p-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex justify-content-center">
          <h3>Sign Up</h3>
        </div>
        <div className="mb-3" role="group" aria-labelledby="name-label">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label id="name-label" htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={user.user.name}
            name="name"
            onChange={controlReg}
          />
        </div>
        <div className="mb-3" role="group" aria-labelledby="email-label">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label id="email-label" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={user.user.email}
            name="email"
            onChange={controlReg}
          />
        </div>
        <div className="mb-3" role="group" aria-labelledby="password-label">
          <label id="password-label" htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className="form-control"
            name="password"
            value={user.user.password}
            onChange={controlReg}
          />
        </div>
        <div className="mb-3" role="group" aria-labelledby="password-confirmation-label">
          <label id="password-confirmation-label" htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            id="password_confirmation"
            type="password"
            className="form-control"
            name="password_confirmation"
            value={user.user.password_confirmation}
            onChange={controlReg}
          />
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" className="mb-2 btn btn-primary" value="Submit" />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <Link to="/login">Already have an account? Sign in.</Link>
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

export default SignUp;
