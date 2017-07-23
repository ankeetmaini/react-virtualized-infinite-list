import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import getNewListItems from './ListData';

import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

class App extends Component {
  constructor () {
    super();
    this.state = { list: getNewListItems()};
  }

  isRowLoaded = ({ index }) => {
    return index <= this.state.list.length;
  }

  loadMoreRows = () => {
    return Promise.resolve().then(() => {
      this.setState({ list: [...this.state.list, ...getNewListItems()]})
    });
  }

  rowRenderer = ({ key, index, style, isScrolling }) => {
    return (
      <div
        key={key}
        style={style}
      >
        <span>
          {this.state.list[index] && this.state.list[index].id}
        </span> <span>
          {this.state.list[index] && this.state.list[index].text}
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <InfiniteLoader
            isRowLoaded={this.isRowLoaded}
            loadMoreRows={this.loadMoreRows}
            rowCount={10000}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                height={200}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                rowCount={10000}
                rowHeight={20}
                rowRenderer={this.rowRenderer}
                width={300}
              />
            )}
          </InfiniteLoader>
        </div>
      </div>
    );
  }
}

export default App;
