import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { grey } from '@material-ui/core/colors';

function dataAtualFormatada() {
    var data = new Date(),
        anoF = data.getFullYear();
    return anoF;
}

const dataFormatada = dataAtualFormatada();


function Footer() {
    return (
        <footer>
            <div className="footer_div">
                <ul>
                    <li>Rua Do Endereço - Estado</li>
                    <li>algumEmail@email.com</li>
                    <li>(88)8888-8888</li>
                </ul>

                <ul>
                    <FacebookIcon className="icons" style={{ fontSize: 30, color: grey[100] }} />
                    <InstagramIcon className="icons" style={{ fontSize: 30, color: grey[100] }} />
                    <TwitterIcon className="icons" style={{ fontSize: 30, color: grey[100] }} />
                </ul>
            </div>
            <p className="copyRight" >Copyright {dataFormatada}</p>
        </footer>
    )
}

export default Footer;