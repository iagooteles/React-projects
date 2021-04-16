import React from 'react';

import itacare01 from "../img/itacare-01.jpg";
import itacare02 from "../img/itacare-02.jpg";
import itacare03 from "../img/itacare-03.jpg";

function ImagensSection() {
    return (
        <section className="knowMore">

            <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <hr className="style-eight" />
            <div className="flexbox">

                <ul class="gallery">

                    <li><img src={itacare02} className="gallery_item" ></img><p>Nosso caminho da praia</p></li>

                    <li><img src={itacare01} className="gallery_item" ></img><p>Nossas acomodações</p></li>

                    <li><img src={itacare03} className="gallery_item" ></img><p>Nossa praia</p></li>
                </ul>
            </div>

            <hr className="style-seven" />


        </section>
    );
};

export default ImagensSection;