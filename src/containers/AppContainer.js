import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../components/core/Nav';
import List from '../components/List';
import Like from '../components/Like';
import Error from '../components/Error';

import { movies$ } from '../movies';

const MainContainer = styled.div`
  width: 80vw;
  margin: auto;
  margin-top: 60px;
  padding-bottom: 100px;
  @media (max-width: 700px) {
    width: 100vw
   }
`

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList: [{
        title : "En chargement",
      }],
      movieLikeList: []
    }
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  componentDidMount() {
    const movies = movies$;
    movies.then(data => {
      this.setState({
        movieList: data
      })
    })
  }

  onAdd(movie) {
    const newMovieLikeList = this.state.movieLikeList;

    let cont = 0;
    for(let val of newMovieLikeList) {
      if(val.title === movie.title) {
        cont = cont + 1;
      }
    }

    if(cont === 0) {
      newMovieLikeList.push(movie);
    }

    cont = 0;
  }

  onRemove(index) {
    let newMovieLikeList = this.state.movieLikeList.slice();
    newMovieLikeList.splice(index, 1);
    this.setState({
      movieLikeList: newMovieLikeList
    })
  }

  render() {
    return (
      <MainContainer>
        <BrowserRouter >
            <Nav />

            <Switch>
              <Route
                path="/"
                exact
                component={() => <List movies={this.state.movieList} onAdd={this.onAdd}></List>}
              />

              <Route
                path="/like"
                component={() => <Like movies={this.state.movieLikeList} onRemove={this.onRemove}></Like>}
              />

              <Route
              component={() => <Error></Error>}
              />

            </Switch>
        </BrowserRouter>
      </MainContainer>
    );
  }
}

export default AppContainer;