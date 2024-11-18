/* eslint-disable react/prop-types */
import ListItem from "./ListItem";

function NavList({ isNavExpanded }) {
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
            <ul className="w-full">
                {listItems.map((item, i) => (
                    <ListItem key={i} link={item.link} text={item.text} />
                ))}
            </ul>
        </nav>
    );
}

export default NavList;
