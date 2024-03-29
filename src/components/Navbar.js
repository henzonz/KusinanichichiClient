import React, { useState } from 'react';
import '../assets/css/bootstrap.min.css'
import Logo from '../assets/img/logo.jpg'
import '../assets/css/Nav.css'
import { Link } from 'react-router-dom'
import Home from '../assets/img/home.png'
import Menu from '../assets/img/menu.png'
import Contacts from '../assets/img/contact-us.png'




function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const menuBtn = document.querySelector('.nav-menu-btn,.mobile-nav__position');

    let menu
    if (showMenu) {
        menuBtn.classList.toggle('open');
        menu =
            <nav className="mobile-nav__background navbar navbar-light border-bottom shadow-lg">
                <ul className="navbar-nav d-flex flex-column pt-4 mx-auto">
                    <li className="nav-item highlight"><a href="/" className="nav-link mobile-nav-link__texts">Home</a></li>
                    <li className="nav-item highlight mt-5"><a href="/silogmeals" className="nav-link mobile-nav-link__texts">Menu</a></li>
                    <li className="nav-item highlight mt-5 mb-4"><a href="/contact" className="nav-link mobile-nav-link__texts">Contact</a></li>
                </ul>
            </nav>



    }
    return (
        <div>
            <div className="nav-lgscreen">
                <nav id="navigation" className="navbar bg-light nav_border fixed-top border-bottom">
                    <div className="row">
                        <div className="col address-writing"><a href="https://www.google.com/maps/dir/37.7759447,-122.4130067/14.3433398,121.059906/@1.6165799,92.6319332,3z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0" target="_blank">
                            B12 L1 7th Street <br></br>
                            Pacita 1 Phase 1A 4023 Pacita Complex, Philippines</a>
                        </div>
                    </div>
                    <a className="navbar-brand ml-5" href="/"><img className="border-orange rounded-circle" src={Logo} style={{ height: '85px', width: '85px' }} alt="" /></a>
                    <ul id="menuLinks" className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <Link to="/"><img className="nav-logo" src={Home} style={{ height: '32px', width: '32px' }} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/silogmeals"><img className="nav-logo" src={Menu} style={{ height: '32px', width: '32px' }} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact"><img className="nav-logo" src={Contacts} style={{ height: '32px', width: '32px' }} /></Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="ml-3 mt-1"><a className="mx-auto mobile-logo" href="/"><img className="border-orange rounded-circle" src={Logo} style={{ height: '85px', width: '85px' }} alt="" /></a></div>
            <div className="mobile-nav__outer border-bottom">
                <div className="mobile-nav">

                    <div className="mobile-nav__position">
                        {menu}
                    </div>
                    <div className={`nav-menu-btn mr-4 shadow-lg ml-auto ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(!showMenu)}>
                        <div className="ml-auto nav-menu-btn__burger"></div>

                    </div>
                </div>
            </div>





        </div>

    );
}

export default Navbar;
