/* eslint-disable react/prop-types */
import ListItem from "./ListItem";

function NavList({ isNavExpanded }) {
    const listItems = [
        {
            text: 'Home',
            link: '#',
        },
        {
            text: 'About Us',
            link: '#',
        },
        {
            text: 'Services',
            link: '#',
        },
        {
            text: 'Portfolio',
            link: '#',
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
