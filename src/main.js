import React from 'react';
import ReactDom from 'react-dom';


import Cowsay from 'react-cowsay';

import faker from 'faker';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Cows from './components/cowsay.js';
import Card from './components/card.js';

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
    this.setState({ fakerLorem });
  }

  render() {
    return (
      <div>
        <Header />
        <Card />
        <Cows.Wrapper>
          <Cows.Button primary ><p onClick={this.btnCow} id="gen">
            Generate some text for the cow!
          </p>
          </Cows.Button>
          <Cows.CowText className={this.state.fakerLorem}>
            <Cowsay className={this.state.cowSelect} >{this.state.fakerLorem}</Cowsay>
          </Cows.CowText>
        </Cows.Wrapper>
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));