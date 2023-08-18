import { Link } from "react-router-dom";
import styles from '../../inline.module.css';

const HomeLogin = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3 p-3 gap-3 card">
                    <Link className={styles.text} to='/login'>Login</Link>
                    <Link className={styles.text} to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
export default HomeLogin;