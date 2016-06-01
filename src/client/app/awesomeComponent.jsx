import React from 'react';
import WorkDropdown from './workDropdown.jsx';

class AwesomeComponent extends React.Component {

    render () {
        return (
            <div className="nav_bar_container">
                <ul>
                    <li><a href=".">Home</a></li>
                    <WorkDropdown />
                    <li><a href="./about">About</a></li>
                    <li>Links</li>
                </ul>
            </div>
        )
    }
}
export default AwesomeComponent;