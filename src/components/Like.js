import React from 'react';
import CardLike from './core/CardLike';
import Select, {Option}  from 'rc-select';
import styled from 'styled-components';
import 'rc-select/assets/index.css';

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 97%;
  padding-top: 20px;
  margin-bottom: 20px;
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
    width: 99.7%;

   }
`

class Like extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isSelected: "All",
      // categories : [],
      categoryLength : this.props.movies.length,
      movies : this.props.movies,
    };

    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }
  
  componentDidUpdate() {
  }

  renderMovies() {
    console.log(this.props);

  }

  onPrint() {
    window.print();
  }

  onChangeCategory(event) {
    this.setState({
      isSelected: event.key
  });
}

  render() {

    const movies = this.props.movies;
    const movieLikeList = movies.map(
      (movie, index) => {
        if(this.state.isSelected === 'All'){
          // console.log('coucou');
          return <CardLike key={index} {...movie} onRemove={this.props.onRemove}>{movie}</CardLike>
        } else if (this.state.isSelected === movie.category) {
          return <CardLike key={index} {...movie} onRemove={this.props.onRemove}>{movie}</CardLike>
        }
      });
// --------------------------

      // suppression des doublons
      console.log(this.props.movies)
      var cache = {};
      let categories = this.props.movies.filter(function(elem){
        return cache[elem.category]?0:cache[elem.category]=1;
      });
      // affichage
      console.log(categories);

// --
    const selectionList = categories.map(
      (movie, index) => {
        // console.log(movie.category);
        return <Option key={index} onClick={this.onChangeCategory} value={movie.category}>{movie.category}</Option>
      });

// --------------------------

    // const selectionList = this.props.movies.map(
    //   (movie, index) => {
    //     console.log(movie.category);
    //     return <Option key={index} onClick={this.onChangeCategory} value={movie.category}>{movie.category}</Option>
    //   });

// --------------------------

    return (
      <div>
        <ContainerFlex>
          <i onClick={this.onPrint} className="fas fa-print fa-2x"></i>

          <Select defaultValue="Tout afficher">
            <Option value="All" onClick={this.onChangeCategory}  >Tout afficher</Option>
            {selectionList}
          </Select>
        </ContainerFlex>

        {/* {this.renderMovies()} */}
        <div style= {{display: 'flex', flexDirection: 'column-reverse'}}>
          {movieLikeList}
        </div>
      </div>
    );
  }
} 

export default Like;