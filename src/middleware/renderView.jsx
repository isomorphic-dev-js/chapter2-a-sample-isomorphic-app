import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import initRedux from '../init-redux';
import * as actions from '../action-creators';
import HTML from '../components/html'
import App from '../components/app'

export default function renderView(req, res, next) {

const store = initRedux();

// Fetch data for the route
// This example only has one route
//so we assume it needs the getHomePageData action
store.dispatch(actions.getHomePageData()).then(() => {
    console.log("hi")
    let html;
    const dataToSerialize = store.getState();
    console.log("data to serialize", dataToSerialize)
    // render main view
    try {
      html = ReactDOM.renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
    } catch(e) {
      // Log the error and then call next,
      // handle errors in another middleware
      console.log("Something went wrong with the render", e);
      return next();
    }

    try {
      const renderedHTML = ReactDOM.renderToString(
        <HTML data={`window.__INITIAL_STATE =
          ${JSON.stringify(dataToSerialize)}`}
              html={html} />
      )
      res.send(renderedHTML)
    } catch(e) {
      // Log the error and then call next,
      // handle errors in another middleware
      console.log("Something went wrong with the wrapper render", e);
      return next();
    }
  });
}
