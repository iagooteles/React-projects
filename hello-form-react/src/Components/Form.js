import React, { useState } from 'react';
import global from "../styles/global.css";


function Form() {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    function handleChange(event) {
        const {value, name} = event.target;

        setFullName((prevValue) => {
            return {
                ...prevValue, 
                [name] : value
            };
        });
    };

    // colocar o handlesubmit
    function handleSubmit() {

    }


    return (
        <div className="container">
            <form>
                <h1>Olá {fullName.fName} {fullName.lName} </h1>
                <hr></hr>

                <input type="text" placeholder="Nome" name="fName" id="fName" onChange={handleChange}
                    value={fullName.fName} 
                    required />

                <input type="text" placeholder="Sobrenome" name="lName" id="lName" onChange={handleChange}
                    value={fullName.lName} 
                    required />


                <button type="submit" onClick={handleSubmit}> Ok </button>
            </form>

        </div>
    );
}

export default Form;