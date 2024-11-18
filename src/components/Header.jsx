/* eslint-disable react/prop-types */
import LeftHeaderPanel from "./LeftHeaderPanel";
import Logo from "./Logo";
import RightHeaderPanel from "./RightHeaderPanel";

function Header({ isNavExpanded, handleNavVisibility }) {
    return(
        <header className="flex justify-between items-center py-8">
            <LeftHeaderPanel />
            <Logo />
            <RightHeaderPanel isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />
        </header>
    )
}

export default Header;