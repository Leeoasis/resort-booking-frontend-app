import { Link } from "react-router-dom";
import styles from '../inline.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
const Navbar = ({ isOpen })=> {
    const [sidebar, SetsideBar] = useState(false)
    const openMenu = ()=> SetsideBar(!sidebar);
    return (
        <>
        <header className="bg-dark text-light"><i className="fa-solid fa-bars" onClick={openMenu} /></header>
        <nav className={`col-4 col-md-2 flex-column ${sidebar ? "open" : ""}`}>
            <p><i className="fa-solid fa-x text-light" onClick={openMenu}/></p>
            <h1 className="fs-2 py-2 text-center d-md-block d-none">LOGO</h1>
            <ul className=" d-flex flex-column fs-6 pt-4" onClick={openMenu}>
            <li className="nav-item-list"><NavLink to="/home" activeClassName="active"><p className="tab">Home</p></NavLink></li>
            <li className="nav-item-list"><NavLink to="/add-reservation" activeClassName="active"><p className="tab">Add</p></NavLink></li>
            <li className="nav-item-list"><NavLink to="/delete-reservation" activeClassName="active"><p className="tab">Delete</p></NavLink></li>
            <li className="nav-item-list"><NavLink to="/details" activeClassName="active"><p className="tab">Details</p></NavLink></li>
            <li className="nav-item-list"><NavLink to="/reservations" activeClassName="active"><p className="tab">Reservations</p></NavLink></li>
            </ul>
            <footer className="d-flex flex-column" onClick={openMenu}>
                <div className="d-flex col-12">
                    <Link className={styles.join} to='/join'>Want to join?</Link>
                </div>
                <div className="socials d-flex flex-row">
                <a href="."><i className="fa-brands fa-x-twitter" /></a>
                <a href="."><i className="fa-brands fa-github" /></a>
                <a href="."><i className="fa-brands fa-linkedin-in" /></a>
                <a href="."><i className="fa-brands fa-google-plus-g" /></a>
                </div>
                <div className="d-flex flex-row justify-content-center pt-1">
                    <p>All right reserved @</p>
                </div>
            </footer>
        </nav>
        </>
    )
}

export default Navbar;