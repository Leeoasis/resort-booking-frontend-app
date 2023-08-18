import { Link } from "react-router-dom";
import styles from '../../inline.module.css';

const HomeLogin = () =>{
    return(
        <div className="d-flex flex-column col-md-6 col-12 p-5 gap-2 card">
        <Link className={styles.text} to='/login'>Login</Link>
        <Link className={styles.text} to='/signup'>Sign Up</Link>
        </div>
    )
}
export default HomeLogin;