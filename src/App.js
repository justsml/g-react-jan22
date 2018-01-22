import React, { Component } from 'react';
import {Jumbotron} from './Jumbotron';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const buttons = <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    return (
      <div>
        <Jumbotron
        title={'Hello gSchoolers! '}
        body={'This is filler!'}
        buttons={buttons}
         />

         <Jumbotron
        title={'Hello 2nd time! '}
        body={'This is moar filler!'}
        buttons={<button>Redundant!</button>}
         />
         </div>
    );
  }
}
export default App;
