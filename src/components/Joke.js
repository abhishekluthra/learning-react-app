import React from 'react';

function Joke (props) {
    let questionStyle = {
        display: true,
    }
    console.log(props);
    if (!props.joke.question) {
        questionStyle.display = "none"
    }

    return (
        <div>
            <p style={questionStyle}>Question: {props.joke.question}</p>
            <p>Punchline: {props.joke.punchline} </p>
        </div>
    )
}

export  default Joke