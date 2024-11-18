/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ListItem({ link, text, handleNavVisibility }) {
    return <li className="group w-full border-t last:border-b border-neutral-900 font-medium text-navItemClamp text-neutral-950 hover:text-accent">
        <Link to={link} onClick={handleNavVisibility} className="relative inline-block w-full py-8 before:absolute before:w-full before:h-0 hover:before:h-full before:start-0 before:bottom-0 before:bg-neutral-950 before:transition-all before:duration-short before:z-[-1] duration-short">
            {text.toUpperCase()}
            </Link>
        </li>
}

export default ListItem;