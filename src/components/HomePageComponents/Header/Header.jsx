import { StyledHeaderWrapper, StyledHeader } from "./HeaderStyles"

import Logo from "../../../svg/Logo.jsx"
import NavHome from "../../../svg/NavHome.jsx"
import NavMovies from "../../../svg/NavMovies.jsx"
import NavTVseries from "../../../svg/NavTVseries.jsx"
import NavBookmark from "../../../svg/NavBookmark.jsx"
import User from "./user.png";


const MobileHeader = () => {
    return (
        <StyledHeaderWrapper>
            <StyledHeader>
                <div className="logo" >
                    <Logo />
                </div>

                <div className="menu" >
                    <NavHome />
                    <NavMovies />
                    <NavTVseries />
                    <NavBookmark />
                </div>

                <div className="user" >
                    <img src={User} alt="User icon" />
                </div>
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}

export default MobileHeader