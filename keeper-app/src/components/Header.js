import React from 'react';
import Data from "./Data";

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

function Header(props) {
    return (
        <header>
            
            <h1>Keeper App <PlaylistAddCheckIcon style={{ fontSize: 30 }}/> </h1>

            <Data />
        </header>

    );
}

export default Header;