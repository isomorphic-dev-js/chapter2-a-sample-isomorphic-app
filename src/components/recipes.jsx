import React from 'react';

export default class Recipes extends React.Component {

  renderRecipeItems() {
    let items = [];
    if (!this.props.recipes) {
      return items;
    }
    this.props.recipes.forEach((item, index) => {
      items.push(<div key={item.title+index} className="item">
          <div className="ui small image"><img src="" /></div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="meta">
              <span className="time">{item.cookTime}</span>
              <span className="servings">{item.servings}</span>
              <span className="difficulty">{item.difficulty}</span>
            </div>
            <div className="description">{item.labels.join(' ')}</div>
          </div>
        </div>
      )
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
