import { useSelector } from 'react-redux';
import HomeLogin from './auth/HomeLogin';

const Authentication = () => {
  const app = useSelector((state) => state);
  console.log(app);
  return (
    <section className="login d-flex justify-content-center align-items-center h-100">
      <HomeLogin />
    </section>
  );
};

export default Authentication;
