import React from 'react';
import ReactDom from 'react-dom';

import Cowsay from 'react-cowsay';

import faker from 'faker';

import Header from './components/header.js';
import Footer from './components/footer.js';

import '../src/style/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakerLorem: ''
    };

    this.btnCow = this.btnCow.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  btnCow(e) {
    this.updateState(this.state.fakerLorem = faker.lorem.lines(10));
  }

  updateState(fakerLorem) {
    console.log(fakerLorem);
    this.setState({ fakerLorem });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="cows">
          <a href="#" onClick={this.btnCow} id="gen">
            Generate
          </a>
          <div id="cowsay" className={this.state.fakerLorem}>
            <Cowsay>{this.state.fakerLorem}</Cowsay>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));