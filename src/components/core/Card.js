import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import ProgressBar from './ProgressBar';

const CardContainer = styled.div`
  background-color : darkgrey
  border: solid 2px #333;
  border-radius: 7px;
  width: 47%;
  margin-bottom: 10px;
  margin-right: 0.923vw;
  margin-left: 0.923vw;


  @media (max-width: 700px) {
   width: 100%
   border-radius: 0px;
   margin-bottom: 0px;
   border-right: solid 0px white;
   border-left: solid 0px white;
   border-top: solid 0px white;
   margin-right: 0;
   margin-left: 0;
  }

  @media (min-width: 1300px) {
   width: 24%
   margin-right: 0.3%;
   margin-left: 0.3%;
  }
`

const TitleMovie = styled.p`
  color: white;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;
  font-size: 1.6rem;
  font-weight: bold;
  // transform: scale(1.05);
  text-shadow: 1px 1px 2px grey;
`

const CategoryMovie = styled.p`
  margin-top: 10px;
  text-align: center;
  letter-spacing: 8px;
  margin-bottom: 30px;
`

const LikeButton = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SubCardContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: solid 2px #333;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
`

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClickedLike : false,
      isClickedDislike : false,
      pourcentage: 50,
    };

    this.calculPourcentage = this.calculPourcentage.bind(this);
    this.addLike = this.addLike.bind(this);
    this.addDislike = this.addDislike.bind(this);
  }

  componentDidMount() {
    let total = this.props.likes + this.props.dislikes;
    let pourcentage = (this.props.likes / total) * 100;
      this.setState({
        pourcentage: pourcentage,
    })
  }

  calculPourcentage(e) {
    let total = this.props.likes + this.props.dislikes;
    let pourcentage = (this.props.likes / total) * 100;
      this.setState({
        pourcentage: pourcentage,
    })
  }

  addLike() {
      this.setState({
        isClickedDislike: false,
      })

    if(this.state.isClickedLike === false) {
      const calcul = this.props.likes + 1;
      const total = calcul + this.props.dislikes;
      const pourcentage = (calcul / total) * 100;
      this.setState({
        pourcentage: pourcentage,
      })
    } else {
      const calcul = this.props.likes;
      const total = calcul + this.props.dislikes;
      const pourcentage = (calcul / total) * 100;
      this.setState({
        pourcentage: pourcentage
      })
    }
  }

  addDislike() {
      this.setState({
        isClickedLike: false,
      })    
    
    if(this.state.isClickedDislike === false) {
      const calcul = this.props.dislikes + 1;
      const total = this.props.likes + calcul;
      const pourcentage = (this.props.likes / total) * 100;
      this.setState({
        pourcentage: pourcentage
      })
    } else {
      const calcul = this.props.dislikes;
      const total = this.props.likes + calcul;
      const pourcentage = (this.props.likes / total) * 100;
      this.setState({
        pourcentage: pourcentage
      })
    }
  }

  render() {

    // console.log(calcul);


    return (
      <CardContainer
        id="gradient"
      >

        <TitleMovie>{this.props.title}</TitleMovie>
        <CategoryMovie>{this.props.category}</CategoryMovie>
         
        <SubCardContainer>
          <i
            style= {{
              cursor: 'pointer',
              transform:
              this.state.isClickedLike ?
              'scale(1.2)' : 'scale(1)',
              textShadow:
              this.state.isClickedLike ?
              '0px 0px 0px #50c450' : '2px 2px 0px lightgrey',
              color:
              this.state.isClickedLike ?
              '#50c450' : 'grey',
            }}
            onClick={() => {
              this.addLike();
              this.setState({
                isClickedLike: !this.state.isClickedLike,
              })
            }}
          className="far fa-thumbs-up fa-2x">
          </i>

          <NavLink
                to="/like"
                onClick={() => this.props.onAdd({
                title: this.props.title,
                category : this.props.category,
              })
            }
          >
          <LikeButton>
            <i
              id="save"
              style= {{
                borderRadius: 10,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 10,
                paddingLeft: 10,
                position: 'relative',
                top: -12,
              }}
            className="far fa-save fa-4x"></i>
          </LikeButton>
          </NavLink>
          
          <i

            style= {{
              cursor: 'pointer',
              transform:
              this.state.isClickedDislike ?
              'scale(1.2)' : 'scale(1)',
              textShadow:
              this.state.isClickedDislike ?
              '0px 0px 0px #f4445e' : '2px 2px 0px lightgrey',
              color:
              this.state.isClickedDislike ?
              '#f4445e' : 'grey',
            }}
            onClick={() => {
              this.addDislike();
              this.setState({
                isClickedDislike: !this.state.isClickedDislike,
              })
            }}
            className="far fa-thumbs-down fa-2x">
          </i>

         </SubCardContainer>
         <ProgressBar pourcentage={this.state.pourcentage}></ProgressBar>

      </CardContainer>
    );
  }
}

export default Card;