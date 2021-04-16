import React from 'react';

// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth();
// const year = date.getFullYear();

var data = new Date(),
    dia  = data.getDate().toString(),
    diaF = (dia.length === 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length === 1) ? '0'+mes : mes,
    anoF = data.getFullYear();


function getYear() {
    return(
        <div>
            {/* <h3>{day}/{month}/{year}</h3> */}
            <h3>{diaF}/{mesF}/{anoF}</h3>
        </div>
    );
}


export default getYear;