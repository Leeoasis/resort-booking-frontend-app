import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from '../../inline.module.css';
import logoutApi from '../reducers/api';
import { update } from './auth';

const Logout = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logoutApi());
    dispatch(update());
    nav('/join');
  };
  return (
    <Link className={styles.text} to="/" onClick={handleLogout}>LogOut</Link>
  );
};
export default Logout;
