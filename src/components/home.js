import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { update } from './auth/auth';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(update());
  }, [dispatch]);
  return (
    <h1>Home</h1>
  );
};
export default Home;
