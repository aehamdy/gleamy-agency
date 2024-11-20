/* eslint-disable react/prop-types */
import LeftHeaderPanel from "./LeftHeaderPanel";
import Logo from "./Logo";
import RightHeaderPanel from "./RightHeaderPanel";

function Header({ handleNavVisibility }) {
    return(
        <header className="relative flex justify-between items-center py-8 z-[1]">
            <LeftHeaderPanel />
            <Logo />
            <RightHeaderPanel handleNavVisibility={handleNavVisibility} />
        </header>
    )
}

export default Header;