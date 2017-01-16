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
    let html;
    const dataToSerialize = store.getState();
    console.log("data to serialize", dataToSerialize)
    // render main view
    html = ReactDOM.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const renderedHTML = ReactDOM.renderToString(
      <HTML data={`window.__INITIAL_STATE =
        ${JSON.stringify(dataToSerialize)}`}
            html={html} />
    )
    res.send(renderedHTML)

  });
}
