import React from 'react';

import { grey } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MessageIcon from '@material-ui/icons/Message';

function Infos() {
    return (
        <section className="infos">
            <div className="infos_div">
                <LocationOnIcon className="infos_icon" style={{ fontSize: 80, color: grey[600] }} />
                <h4>A melhor localização da cidade, repleto de belezas, verde e mar! </h4>
            </div>
            <div className="infos_div">
                <PhotoCameraIcon className="infos_icon" style={{ fontSize: 80, color: grey[600] }} />
                <h4>As melhores paisagens para você poder tirar as suas fotos e publicar nas suas redes! </h4>
            </div>
            <div className="infos_div">
                <MessageIcon className="infos_icon" style={{ fontSize: 80, color: grey[600]}} />
                <h4>Nossos atendentes estão prontos para responder todas suas dúvidas! </h4>
            </div>
        </section>
    );
};

export default Infos;