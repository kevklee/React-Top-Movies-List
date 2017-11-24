import { combineReducers } from 'redux';
import TopMovies from './reducer_top_movies';
import ActiveMovie from './reducer_active_movie';

const allReducers = combineReducers ({
  movies: TopMovies,
  activeMovie: ActiveMovie
});

export default allReducers;
