import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    answer: 42
  };

  asyncFunc =()=> {
    return Promise.resolve(36);
  };

  // async await syntax requires babel polyfill to work
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>The answer is {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
