import Header from "../components/Header";
import SpinningLogo from "../components/SpinningLogo";
import SpecialitiesBar from "../components/SpecialitiesBar";
import WatchVideoButton from "../components/WatchVideoButton";
import { Outlet } from "react-router-dom";
import NavList from "../components/NavList";
import { useState } from "react";

function PageLayout() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  
    const handleNavVisibility = () => {
      setIsNavExpanded(prevValue => !prevValue);
    };
  
    return(
        <>
        <NavList isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />
        <Header handleNavVisibility={handleNavVisibility} />
        <SpinningLogo />
        <SpecialitiesBar />
        <WatchVideoButton />
        <div className="ms-[8%]">
        <Outlet />
        </div>
        </>
    )
}

export default PageLayout;