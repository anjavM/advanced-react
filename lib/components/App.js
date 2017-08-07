import React from 'react';
import dataApi from '../dataApi';
import {data} from '../testData';
import ArticleList from './ArticleList';

const api = new dataApi(data);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };

    console.log(this.state);
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
