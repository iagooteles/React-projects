import React, { useState } from 'react';

import global from "../styles/global.css";


function Form(props) {
    const [heading, setHeading] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // function validateForm() {
    //     return name.length > 0 && password.length > 0;
    // }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSenhaChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmarSenha(event) {
        setConfirmPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, password, confirmPassword);

        setHeading(name)

        document.querySelector("#login").value = "";
        document.querySelector("#senha").value = "";

        if (props.registered) {

        } else {
            document.querySelector("#ConfirmarSenha").value = "";
        }


    }

    return (
        <div className="container">
            <form>
                <h1>Hello {heading}</h1>
                <hr></hr>

                <label htmlFor="uname">Login</label>
                <input type="text" placeholder="Login" name="login" onChange={handleNameChange} id="login" required />

                <label htmlFor="psw">Senha</label>
                <input type="password" placeholder="Senha" name="senha" id="senha" onChange={handleSenhaChange} required />

                {!props.registered ? 
                    <>
                        <label htmlFor="psw">Confirmar senha</label>
                        <input type="password" placeholder="Confirmar senha" name="ConfirmarSenha" id="ConfirmarSenha" onChange={handleConfirmarSenha}  required /> 
                    </>
                : null
                }


                <button type="submit" onClick={handleSubmit}>{props.registered? "Login" : "Registrar"} </button>
            </form>

        </div>
    );
}

export default Form;