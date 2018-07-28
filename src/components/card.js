import React, { Component } from 'react';
import B from './cowsay.js';
import cowsay from './cowsay.js';
import Cowsay from 'react-cowsay';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      cowSelect: ''
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    // this.cowSelect = this.cowSelect.bind(this);
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

handleChange(event, index, value) {
  this.updateState({ value: 'b' });
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

renderOptions() {
  return this.state.cowSelect;

}

  updateState(cowSelect) {
    this.setState({ cowSelect });
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
                <B.Button onClick={this.cowSelect}> Cow 2 </B.Button>
                <B.Button value={this.state.cowSelect} onClick={this.handleChange}>
       {this.renderOptions()} Cow 1 </B.Button>
                <B.Button onClick={this.cowSelect}> Cow 3 </B.Button>
                </div>
                : null

        }
      </div>
    );
  }
}

export default Card;