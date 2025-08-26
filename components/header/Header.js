import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import Logo from '/public/images/logo.png'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';

const Header = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <header className={`site_header  ${isSticky ? 'sticky' : ''}`}>
            <div className="nav_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-5 d-flex align-items-center">
                            <div className="site_logo">
                                <NavLink className="site_link" href="/" onClick={ClickHandler}>
                                    <Image loading="lazy" style={{ width: '90px', height: 'auto' }} src={Logo} alt="ICO Site Logo" /> 
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className={`main_menu_inner collapse navbar-collapse justify-content-center ${mobailActive ? 'show' : ''}`} id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list text-uppercase main-menu">
                                        <li>
                                            <NavLink onClick={ClickHandler} className="nav-link" href="/">
                                                <span className="nav_link_label" data-text="Home">Home</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <Link to="id_ico_about_section" spy="1" smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                                                <span className="nav_link_label" data-text="About">About</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="https://staking.horizontrust.biz" className="nav-link scrollspy_btn">
                                                <span className="nav_link_label" data-text="Staking">Staking</span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="id_ico_event_section" spy="1" smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                                                <span className="nav_link_label" data-text="Roadmap">Roadmap</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="id_ico_faq_section" spy="1" smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                                                <span className="nav_link_label" data-text="FAQ">FAQ</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <MobileMenu/>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-5">
                            <ul className="btns_group unordered_list p-0 justify-content-end">
                                <li className="d-lg-none">
                                    <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setMobailState(!mobailActive)}>
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <a href='https://staking.horizontrust.biz' className="ico_btn_outline scrollspy_btn d-lg-inline-flex d-none">
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                        <span className="btn_label">Get Started</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;