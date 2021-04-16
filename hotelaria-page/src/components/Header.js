import React from 'react';
import HotelIcon from '@material-ui/icons/Hotel';

import blueGrey from '@material-ui/core/colors/red';




function Header() {
    return (
        <header>
            <a href="#"><HotelIcon style={{ color: blueGrey[50] }} /></a>
            <nav>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Reservas</a></li>
                <li><a href="#">Contato</a></li>
            </nav>
        </header>

    );
};

export default Header;