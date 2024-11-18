/* eslint-disable react/prop-types */
import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";

function RightHeaderPanel({ isNavExpanded, handleNavVisibility }) {



    return(
        <div className="flex gap-10 h-6">
            <SearchButton />
            <span className="hidden md:block w-[1px] h-full bg-white-03"></span>
            <MenuButton isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />
        </div>
    )
}

export default RightHeaderPanel;