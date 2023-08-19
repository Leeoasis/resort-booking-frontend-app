import { Link } from "react-router-dom";
import styles from '../inline.module.css'
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
                <li><a href=".">Item 1</a></li>
                <li><a href=".">Item 2</a></li>
                <li><a href=".">Item 3</a></li>
                <li><a href=".">Item 4</a></li>
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