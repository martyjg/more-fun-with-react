import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './awesomeComponent.jsx';
import SocialMedia from './socialMedia.jsx';

class App extends React.Component {
    render () {
        return <div> Whats up! <h1>This is crazy I am writing shit in a react way</h1>
        <AwesomeComponent />
        <SocialMedia />

        </div>;
    }
}

render(<App/>, document.getElementById("app"));