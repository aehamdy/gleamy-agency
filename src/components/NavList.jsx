import ListItem from "./ListItem";

function NavList() {
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
        <nav className="grid place-items-center absolute w-full h-[100dvh] start-0 bg-accent z-50">
            <ul className="w-full">
                {listItems.map((item, i) => (
                    <ListItem key={i} link={item.link} text={item.text} />
                ))}
            </ul>
        </nav>
    );
}

export default NavList;
