/* eslint-disable react/prop-types */
import ListItem from "./ListItem";
import MenuButton from "./MenuButton";

function NavList({ isNavExpanded, handleNavVisibility }) {
    const listItems = [
        {
            link: '/',
            text: 'Home',
        },
        {
            link: '/about',
            text: 'About Us',
        },
        {
            link: '/services',
            text: 'Services',
        },
        {
            link: '/portfolio',
            text: 'Portfolio',
        },
    ];

    return (
        <nav className={`grid place-items-center absolute w-full h-[100dvh] ${isNavExpanded ? 'top-0 visible' : 'top-[-100%] invisible'} start-0 bg-accent z-50 duration-500`}>
            <div className="absolute justify-self-end top-[10%] -mb-12 me-[4%]">
            <MenuButton text="Close" isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />
            </div>
            <ul className="w-full absolute top-1/2 translate-y-[-40%]">
                {listItems.map((item, i) => (
                    <ListItem key={i} link={item.link} text={item.text} handleNavVisibility={handleNavVisibility} />
                ))}
            </ul>
        </nav>
    );
}

export default NavList;
