import React from 'react';
import ToggleDisplay from 'react-toggle-display';

class WorkDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {visible: false}
        this.onSayHey = this.onSayHey.bind(this)
        this.onSayBye = this.onSayBye.bind(this)
    };


    onSayHey ()  {

        console.log("heyyyy");
        this.setState({visible: true})

    };

    onSayBye () {

        console.log("cyaaa");
        this.setState({visible: false})
    }


    onLike () {
      let newLikesCount = this.state.likesCount + 1;
      this.setState({likesCount: newLikesCount});
  }

  render () {
    return (
        <li onMouseOver={this.onSayHey} onMouseLeave={this.onSayBye}>lol<ToggleDisplay show={this.state.visible} className="hidden_list">
        <ul>
        <li>4 SURE?</li>
        <li>INSTANT CRUSH</li>
        <li>SOMETHING</li>
        </ul>
        </ToggleDisplay>
        </li>
        )
    }
}

export default WorkDropdown;
