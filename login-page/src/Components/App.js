import React from 'react';
import Footer from './Footer';
import Form from './Form';

let registered = false;

function App() {
    return (
        <div>
            <Form 
                registered={registered}
            />
            <Footer />
        </div>
    );
}

export default App;
