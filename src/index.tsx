import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';
class App extends Component {
  state = {
    news: JSON
  };
  render() {
    console.log(this.state.news);
    return (
      <div>
        <Header />
        <NewsList news={this.state.news}>
          <h3>The news are:</h3>
        </NewsList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
