import React, { useState } from 'react';

const timeNow = new Date().toLocaleTimeString();
function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}
const dataFormatada = dataAtualFormatada();


function Footer() {
    const [time, setTime] = useState(timeNow)

    function getTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setInterval(getTime, 1000);


    return (
        <footer>
            <p>{time}</p>
            <p>Copyright {dataFormatada}</p>
        </footer>
    );
}

export default Footer;