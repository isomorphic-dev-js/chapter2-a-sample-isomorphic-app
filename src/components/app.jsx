import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipes from './recipes';
import Featured from './featured';
import * as actionCreators from '../action-creators';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui contianer">
            <a href="/" className="header item">Recipes Example App</a>
          </div>
        </div>
        <div className="ui padded grid">
          <Recipes {...this.props}/>
          <Featured {...this.props.featuredRecipe}/>
        </div>
        <div className="ui inverted vertical footer segment">
        Footer
        </div>
      </div>
    );
  }
}

export default App;
