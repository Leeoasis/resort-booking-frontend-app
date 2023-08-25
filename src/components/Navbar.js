import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../inline.module.css';
import logo from './images/logo.png';
import Logout from './auth/Logout';

const Navbar = () => {
  const { data } = useSelector((state) => state.data);
  const [sidebar, SetsideBar] = useState(false);
  const openMenu = () => SetsideBar(!sidebar);

  return (
    <>
      <header className="bg-dark text-light d-flex justify-content-between">
        <i className="fa-solid fa-bars" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav" />
        <h1>hi</h1>
      </header>
      <nav className={`col-4 col-md-2 flex-column ${sidebar ? 'open' : ''}`}>
        <p><i className="fa-solid fa-x text-light" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav" /></p>
        <img className="nav-logo" src={logo} width={140} height={40} alt="Navbar logo" />
        <ul className=" d-flex flex-column fs-6 pt-4">
          {data && data.length > 0 && !data.includes(null) && (
            <>
              <li className="nav-item-list"><NavLink to="/" activeClassName="active" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav"><p className="tab">Home</p></NavLink></li>
              <li className="nav-item-list"><NavLink to="/add-reservation" activeClassName="active" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav"><p className="tab">Add</p></NavLink></li>
              <li className="nav-item-list"><NavLink to="/delete-reservation" activeClassName="active" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav"><p className="tab">Delete</p></NavLink></li>
              <li className="nav-item-list"><NavLink to="/details" activeClassName="active" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav"><p className="tab">Details</p></NavLink></li>
              <li className="nav-item-list"><NavLink to="/reservations" activeClassName="active" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav"><p className="tab">Reservations</p></NavLink></li>
            </>
          )}
        </ul>
        <footer className="d-flex flex-column">
          <div className="d-flex col-12">
            {data && data.length > 0 && !data.includes(null) ? (
              <Logout />
            ) : (
              <Link className={styles.join} to="/join">
                Want to join?
              </Link>
            )}
          </div>
          <div className="socials d-flex flex-row" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu} aria-label="toggle nav">
            <a href="."><i className="fa-brands fa-x-twitter" aria-label="toggle nav" /></a>
            <a href="."><i className="fa-brands fa-github" aria-label="toggle nav" /></a>
            <a href="."><i className="fa-brands fa-linkedin-in" aria-label="toggle nav" /></a>
            <a href="."><i className="fa-brands fa-google-plus-g" aria-label="toggle nav" /></a>
          </div>
          <div className="d-flex flex-row justify-content-center pt-1">
            <p>All right reserved @</p>
          </div>
        </footer>
      </nav>
    </>
  );
};

export default Navbar;
