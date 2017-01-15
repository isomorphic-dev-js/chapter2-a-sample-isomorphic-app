// React components
let Counter = props => {
  return <div className="counter">{props.value}</div>
}

let Button = props => {
  return <button onClick={props.handleClick}>{props.label}</button>
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      counter: 0
    };
  }

  add() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  render() {
    return (
      <div className="counter-example">
        <Counter value={this.state.counter} />
        <Button handleClick={this.add} label="Add 1" />
        <Button handleClick={this.reset} label="Reset" />
      </div>
    );
  }
}

//Render into DOM
ReactDOM.render(
  <App />,
  document.getElementById('render-react-into-me')
);
