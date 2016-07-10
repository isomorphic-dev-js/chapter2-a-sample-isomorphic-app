import React from 'react';

export default class Featured extends React.Component {
  render() {
    return (
        <div className="featured ui container six wide column">
          <div>{this.props.title}</div>
          <div>{this.props.cookTime}</div>
          <div>{this.props.difficulty}</div>
          <div>{this.props.servings}</div>
          <div>{this.props.labels}</div>
          <div>{this.props.ingredients}</div>
          <div>{this.props.steps}</div>
        </div>
    );
  }
}
