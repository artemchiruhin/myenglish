import React, { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';

function App() {
    const [words, setWords] = useState([]);

    return (
        <div className="container">
            <div className="row">
                <Form setWords={setWords} />
            </div>
            <div className="container">
                <div className="d-flex">
                    {words.map(item => <Card item={item} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
