import React from 'react';

const Featured = (props) => {
  const buildIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => {
      return (
        <li className="item"
            key={`${ingredient}-${index}`}>
          {ingredient}
        </li>
      );
    });
  }

  const buildSteps = (steps) => {
    return steps.map((step, index) => {
      return (
        <li className="item"
            key={`${step}-${index}`}>
          {step}
        </li>
      );
    });
  }

  return (
    <div className="featured ui container segment six wide column">
      <div className="ui large image">
        <img src={`http://localhost:3000/assets/${props.thumbnail}`} />
      </div>
      <h3>{props.title}</h3>
      <div className="meta">Cook Time: {props.cookTime}</div>
      <div className="meta">Difficulty: {props.difficulty}</div>
      <div className="meta">Servings: {props.servings}</div>
      <div className="meta">Tags: {props.labels.join(', ')}</div>
      <h4>Ingredients</h4>
      <div className="ui bulleted list">
        {buildIngredients(props.ingredients)}
      </div>
      <h4>Steps</h4>
      <div className="ui ordered list">
        {buildSteps(props.steps)}
      </div>
    </div>
  );
}

export default Featured;
