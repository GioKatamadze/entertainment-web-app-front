import * as React from 'react'
import { StyledHeaderWrapper, StyledHeader } from "./HeaderStyles"
import { NavLink } from "react-router-dom"

import Logo from "../../svg/Logo.jsx"
import NavHome from "../../svg/NavHome.jsx"
import NavMovies from "../../svg/NavMovies.jsx"
import NavTVseries from "../../svg/NavTVseries.jsx"
import NavBookmark from "../../svg/NavBookmark.jsx"
import User from "./user.png";



const Header = () => {

    return (
        <StyledHeaderWrapper>
            <StyledHeader>

                <NavLink className="logo" to='/'>
                    <Logo />
                </NavLink>

                <nav className="menu" >
                        <NavLink id="home" className="navItem" to='/'><NavHome /></NavLink>
                        <NavLink id="movies" className="navItem" to='/movies'><NavMovies /></NavLink>
                        <NavLink id="tvseries" className="navItem" to='/tvseries'><NavTVseries /></NavLink>
                </nav>

                <NavLink id="user" className="user" to='/user'>
                    <img src={User} alt="User icon" />
                </NavLink>
                
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}

export default Header