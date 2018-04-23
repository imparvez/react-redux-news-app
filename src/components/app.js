import React, { Component } from 'react';

// custom libraries
import SearchBar from '../containers/search_bar';
import NewsDetail from '../containers/news_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<NewsDetail />
      </div>
    );
  }
}
