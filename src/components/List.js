import React from 'react';
import Select, {Option}  from 'rc-select';
import styled from 'styled-components';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';

import Card from './core/Card';

const DisplayCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 700px) {
    border-top: 2px solid #333;
   }
`

const PageContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row-reverse;
  padding-left: 1.3%;
  padding-right: calc(1.3% * 1.2);

  @media (max-width: 700px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  padding-left: 1.3%;
  padding-right: calc(1.3% * 1.2);
   }

  @media (min-width: 1300px) {
    padding-left: 0;
    padding-right: 0;
   }
`
const Ul = styled.ul`
  border: 2px solid #333;
  display: flex;
  padding: 0;
  margin: 0;
  padding-top: 5px;
  list-style: none;
  font-size: 1.2rem;
  line-height: 1rem;
  border-radius: 5px;
`
const PageNumber = styled.li`
  margin: 3px 15px 10px 15px;
  cursor: pointer;
  font-weight: bold:;
  text-align: center;
`

class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies: this.props.movies,
      currentPage: 1,
      moviesPerPage: 8,
    }; 

    this.handleClick = this.handleClick.bind(this);
    this.onChangeNbrMovie = this.onChangeNbrMovie.bind(this);
  }

  handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
    });
  }

  onChangeNbrMovie(event) {
      this.setState({
        moviesPerPage: Number(event.key),
        currentPage: 1,
    });
  }

  render() {
// ----
    const { movies, currentPage, moviesPerPage } = this.state;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = this.state.movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const movieList = currentMovies.map(
      (movie, index) => {
        return <Card key={index} {...movie} onAdd={this.props.onAdd}>{movie}</Card>
      });

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      // console.log('test nbr', number);
      // console.log('current page', this.state.currentPage);
      if(this.state.currentPage === number){
        // console.log('coucou actif');
        return(
          <PageNumber
            style={{
              transform: 'scale(1.2)',
            }}
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </PageNumber>
        )
      } else {
        // console.log('coucou normal');

        return(
          <PageNumber
            style={{
              color: 'grey',
            }}
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </PageNumber>
        )
      }
      


    })

    return (
      <div>
        <PageContainer>
          <Ul>
            {renderPageNumbers}
          </Ul>

          <Select defaultValue={this.state.moviesPerPage}>
            <Option onClick={this.onChangeNbrMovie} value="4">4</Option>
            <Option onClick={this.onChangeNbrMovie} value="8">8</Option>
            <Option onClick={this.onChangeNbrMovie} value="12">12</Option>
          </Select>
        </PageContainer>

        <DisplayCard>
          {movieList}
        </DisplayCard>
        {/* {this.renderMovies()} */}
      </div>
    );
  }
}

export default List;