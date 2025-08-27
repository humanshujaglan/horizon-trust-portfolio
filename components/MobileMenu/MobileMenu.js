import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import NavLink from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    }
]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="mobail-menu main_menu_list unordered_list text-uppercase">
            <ul className='MuiList-root MuiList-padding css-h4y409-MuiList-root' style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                <li>
                    <Link to="id_ico_hero_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="Home">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="id_ico_about_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="About">About</span>
                    </Link>
                </li>
                <li>
                    <a href="https://stake.horizontrust.biz" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="Staking">Staking</span>
                    </a>
                </li>
                <li>
                    <Link to="id_ico_roadmap_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="Roadmap">Roadmap</span>
                    </Link>
                </li>
                <li>
                    <Link to="id_ico_team_section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link scrollspy_btn">
                        <span className="nav_link_label" data-text="Team">Team</span>
                    </Link>
                </li>
            </ul>
        </ul>
    )
}

export default MobileMenu;

