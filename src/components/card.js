import React, { Component } from 'react';
import B from './cowsay.js';
import cowsay from './cowsay.js';
import Cowsay from 'react-cowsay';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      cowSelect: ''
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    // this.cowSelect = this.cowSelect.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showMenu(e) {

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

handleChange(event) {
  this.updateState(event.target.value);
  console.log('this is the current state', this.state);
}

// render() {
//  return (
//    <div>
//      <DropDownMenu value={this.state.selected} onChange={this.handleChange}>
//        {this.renderOptions()}
//      </DropDownMenu>
//    </div>
//  );
// }


  updateState(cowSelect) {
    this.props.updateCowS(cowSelect);
  }

  render() {
    return (
      <div>
        <B.Button onClick={this.showMenu}>
          Cow Menu
        </B.Button>

        {
          this.state.showMenu ? <div  // eslint-disable-line
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }} >
 <B.Button value="a" onClick={this.handleChange}>
       Cow 1 (a) </B.Button>

                <B.Button value="b" onClick={this.handleChange}>
       Cow 2 (b) </B.Button>


 <B.Button value="c" onClick={this.handleChange}>
       Cow 3 (c) </B.Button>                </div>
                : null

        }
      </div>
    );
  }
}

export default Card;