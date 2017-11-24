import React from 'react';
import { Component } from 'react';
require ('../../scss/style.scss');

import MovieDetail from '../containers/movie_detail';
import MovieList from '../containers/movie_list';

export default class App extends Component {
  render() {
    return (
      <div className="main-div">
        <MovieDetail />
        <MovieList />
      </div>
    );
  }
}
