import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (!this.props.movie) {
    return <div className="movie-header"><h3>Top Movie List</h3>Select a movie to get started.</div>;
    }

    return(
      <div className="wrapper">
        <h3>Movie Details: </h3>
        <img src={this.props.movie.img}/>
        <div>Title: {this.props.movie.title}</div>
        <div>Score: {this.props.movie.score}</div>
        <div>Year: {this.props.movie.year}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  }
}

export default connect(mapStateToProps)(MovieDetail);
