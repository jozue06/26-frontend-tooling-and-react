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
      fakerLorem: '',
      cowSelect: ''
    };

    this.btnCow = this.btnCow.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCow = this.updateCow.bind(this);
  }

  btnCow(e) {
    this.updateState(this.state.fakerLorem = faker.hacker.phrase());
  }

  updateState(fakerLorem) {
    this.setState({ fakerLorem });
  }

  updateCow(cowSelect) {
    this.setState({ cowSelect });
  }

  render() {
    let opts = {
    };

    opts[this.state.cowSelect] = true;

    return (
      <div>
        <Header />
        <Card updateCowS={this.updateCow}/>
        <Cows.Wrapper>
          <Cows.Button primary ><p onClick={this.btnCow} id="gen">
            Generate some text for the cow!
          </p>
          </Cows.Button>
          <Cows.CowText>
            <Cowsay {...opts}>{this.state.fakerLorem}</Cowsay>
          </Cows.CowText>
        </Cows.Wrapper>
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));