import React from 'react';

export default class Recipes extends React.Component {

  renderRecipeItems() {
    let items = [];
    if (!this.props.recipes) {
      return items;
    }
    this.props.recipes.forEach((item, index) => {
      if (!item.featured) {
        items.push(<div key={item.title+index} className="item">
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
        </div>)
      }
    });
    return items;
  }

  render() {
    return (
        <div className="recipes ui items six wide column">
          {this.renderRecipeItems()}
        </div>
    );
  }
}
