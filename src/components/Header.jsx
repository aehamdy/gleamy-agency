import LeftHeaderPanel from "./LeftHeaderPanel";
import Logo from "./Logo";
import RightHeaderPanel from "./RightHeaderPanel";

function Header() {
    return(
        <header className="flex justify-between items-center py-8">
            <LeftHeaderPanel />
            <Logo />
            <RightHeaderPanel />
        </header>
    )
}

export default Header;