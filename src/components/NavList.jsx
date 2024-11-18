function NavList() {
    return (
        <nav className="grid place-items-center absolute w-full h-[100dvh] start-0 bg-accent z-50">
            <ul className="w-full text-neutral-950">
                <li className="w-full border-t last:border-b border-neutral-900"><a href="#" className="inline-block w-full py-8 text-navItemClamp">Home</a></li>
                <li className="w-full border-t last:border-b border-neutral-900"><a href="#" className="inline-block w-full py-8 text-navItemClamp">About</a></li>
                <li className="w-full border-t last:border-b border-neutral-900"><a href="#" className="inline-block w-full py-8 text-navItemClamp">Services</a></li>
                <li className="w-full border-t last:border-b border-neutral-900"><a href="#" className="inline-block w-full py-8 text-navItemClamp">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavList;
