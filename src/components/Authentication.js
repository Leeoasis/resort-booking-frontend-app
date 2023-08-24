import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomeLogin from './auth/HomeLogin';
import { update } from './auth/auth';

const Authentication = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(update());
  }, [dispatch]);
  const app = useSelector((state) => state);
  console.log(app);
  return (
    <section className="login d-flex justify-content-center align-items-center h-100">
      <HomeLogin />
    </section>
  );
};

export default Authentication;
