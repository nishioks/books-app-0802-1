import React, { Component } from 'react';
import ViewIsbn from './src/register/ViewIsbn';
import ViewBookDetail from './src/register/ViewBookDetail';
import WriteChip from './src/register/WriteChip';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'modeViewIsbn',
      data: {},
    };
  }

  changeMode = (mode, data) => {
    this.setState({ mode, data });
  }

  render() {
    const { mode, data } = this.state;

    if (mode === 'modeViewIsbn') {
      return <ViewIsbn changeMode={this.changeMode} />;
    }
    if (mode === 'modeViewBookDetail') {
      return <ViewBookDetail changeMode={this.changeMode} dataBookDetail={data} />;
    }
    if (mode ==='modeWriteChip') {
      return <WriteChip changeMode={this.changeMode} dataBookDetail={data} />;
    }
  }
}

export default App;
