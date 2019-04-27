import React from 'react';
import styled from 'styled-components';

const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 800px) {
    justify-content: space-around;
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
   }

  @media (min-width: 1000px) {
    justify-content: space-around;
    width: 700px;
    margin: auto;
    margin-bottom: 20px;
   }

  @media (max-width: 700px) {
    width: 90%;
    margin:auto;
    margin-bottom: 20px;
   }
`

const DisplayFlex = styled.div`
  border-radius: 10px;
  border: 2px solid #333;
  padding-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`

class CardLike extends React.Component {
  render() {
    return (
      <ContainerFlex>
        <DisplayFlex id='bgCardLike'>
          <i id='deco' className="fas fa-film fa-2x"></i>
          <h1 style={{padding: 0, fontSize: '1.5rem'}}>{this.props.title}</h1>
         </DisplayFlex>
   
        <i
          id='trash'
          onClick={() => this.props.onRemove(this.props.children)}
        className="fas fa-trash-alt fa-2x"></i>

      </ContainerFlex>
    );
  }
}

export default CardLike;