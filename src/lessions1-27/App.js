import React from 'react';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 
import { render } from '@testing-library/react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header  username="Tommy"/>
                <Greetting />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default App

class Header extends React.Component  {
    render () {
        return (
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
}

class Greetting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
    
        if (hours <12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night"
        }
        return (
            <h1> Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}