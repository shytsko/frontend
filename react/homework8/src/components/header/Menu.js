import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MenuItems from "./MenuItems";

const menuInitState = [
    {
        title: "MEN",
        items: ["Accessories", "Bag", "Denim", "T-Shirts"]
    },
    {
        title: "WOMAN",
        items: ["Accessories", "Jackets &amp; Coats", "Polos", "T-Shirts", "Shirts"]
    },
    {
        title: "KIDS",
        items: ["Accessories", "Jackets &amp; Coats", "Polos", "T-Shirts", "Shirts", "Bags"]
    },
];

function Menu() {
    const [menuItems, setMenuItems] = useState(menuInitState);


    return (<div className="header__menu">
        <input
            className="header__menu-checkbox"
            type="checkbox"
            name="menu"
            id="menu"
        />
        <label htmlFor="menu">
            <img src="img/icon_menu.svg" alt="menu" />
        </label>
        <nav className="menu">
            <label className="menu__close" htmlFor="menu">
                <FontAwesomeIcon icon={faXmark} />
            </label>
            <h3 className="menu__title">MENU</h3>
            {menuItems.map((menu) => <MenuItems key={menu.title} title={menu.title} items={menu.items} />)}
        </nav>
    </div>);
}

export default Menu;