import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo () {
    const headerStyle = {
        color: 'blue',
    }
    return (
        <div>
            <h1 style={headerStyle}>Abhishek Luthra</h1>
            <p>This is a paragraph about me. Below is a list of places I like to vacation:</p>
            <ul>
                <li>Barcelona</li>
                <li>Los Cabos</li>
                <li>Miami</li>
            </ul>
        </div>
    );
};

ReactDOM.render(
    <MyInfo />,
  document.getElementById('root')
);
