import React from 'react';

export default class Recipes extends React.Component {

  renderRecipeItems() {
    if (!this.props.recipes) {
      return [];
    }
    return this.props.recipes.filter((item) => {
      return !item.featured
    }).map((item, index) => {
      return <div key={item.title+index} className="item">
          <div className="ui small image"><img src={`http://localhost:3000/assets/${item.thumbnail}`} /></div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="meta">
              <div className="meta time">Cook Time: {item.cookTime}</div>
              <div className="meta servings">Servings: {item.servings}</div>
              <div className="meta difficulty">Difficulty: {item.difficulty}</div>
            </div>
            <div className="description">Tags: {item.labels.join(', ')}</div>
          </div>
      </div>
    });
  }

  render() {
    return (
        <div className="recipes ui items six wide column">
          {this.renderRecipeItems()}
        </div>
    );
  }
}
