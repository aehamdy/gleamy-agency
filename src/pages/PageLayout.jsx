/* eslint-disable react/prop-types */
import Header from "../components/Header";
import SpinningLogo from "../components/SpinningLogo";
import SpecialitiesBar from "../components/SpecialitiesBar";
import WatchVideoButton from "../components/WatchVideoButton";
import { Outlet } from "react-router-dom";
import NavList from "../components/NavList";

function PageLayout({ isNavExpanded, handleNavVisibility, }) {
    return(
        <>
        <NavList isNavExpanded={isNavExpanded} />
        <Header isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />
        <SpinningLogo />
        <SpecialitiesBar />
        <WatchVideoButton />
        <Outlet />
        </>
    )
}

export default PageLayout;