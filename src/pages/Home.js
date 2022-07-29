import React, {useState} from 'react';

import main_logo from '../img/main_logo.png';
import '../components/navbar/Navbar.css';
import { MenuItems } from "../components/navbar/MenuItems";
import Button from '../components/Button'

const Home = () => {
    const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
            <nav className="Navbar">
                <h1 className="navbar-logo"><img src={main_logo} alt='React'/></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        )
};

export default Home;