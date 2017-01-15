// setup Redux
const ADD = 'ADD';
const RESET = 'RESET';

//create reducer
let countReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        value: action.value + state.value
      })
    case RESET:
      return Object.assign({}, state, {
        value: 0
      });

    default:
      return state
  }
}

//setup action creators
function add() {
  return {
    type: ADD,
    value: 1
  }
}

function reset() {
  return {type: RESET}
}

// create store
const reducer = Redux.combineReducers({
  counter: countReducer
});

let store = Redux.compose()(Redux.createStore)(reducer, {counter: {value: 0}});

// React components
const Counter = props => {
  return <div className="counter">{props.value}</div>
}

const Button = props => {
  return <button onClick={props.handleClick}>{props.label}</button>
}

const App = props => {
  return (
    <div className="counter-example">
      <Counter value={props.counter.value} />
      <Button handleClick={props.actions.add} label="Add 1" />
      <Button handleClick={props.actions.reset} label="Reset" />
    </div>
  );
}

function mapStateToProps(state) {
  return {counter: state.counter}
}

function mapDispatchToProps(dispatch) {
  return { actions: Redux.bindActionCreators({add, reset}, dispatch) }
}

const WrappedApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

//Render into DOM
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <WrappedApp />
  </ReactRedux.Provider>,
  document.getElementById('render-react-into-me')
);
