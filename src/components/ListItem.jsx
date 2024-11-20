/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function ListItem({ link, text, handleNavVisibility }) {
    return <li className="group w-full border-t last:border-b border-neutral-900 font-medium text-navItemClamp text-neutral-950 hover:text-accent">
                    <NavLink
                to={link}
                onClick={handleNavVisibility}
                className={({ isActive }) =>
                    `relative inline-block w-full py-8 before:absolute before:w-full before:h-0 hover:before:h-full 
                     before:start-0 before:bottom-0 before:bg-neutral-950 before:transition-all before:duration-short 
                     before:z-[-1] duration-short ${isActive ? 'text-gray-300 hover:text-accent bg-neutral-950' : ''}`
                }
            >
            {text.toUpperCase()}
            </NavLink>
        </li>
}

export default ListItem;