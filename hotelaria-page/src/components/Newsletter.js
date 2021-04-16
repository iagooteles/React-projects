import React from 'react';

function Newsletter() {
    return(
        <section className="newsletter">
            <h3>Cadastre!</h3>
            <p>Receba nossos emails e fique por dentro de nossas promoções e eventos!</p>

            <hr className="hr_two"/>
            <form>
                <input type="text" placeholder="email" />
                <button>Cadastrar</button>
            </form>
        </section>
    );
};

export default Newsletter;