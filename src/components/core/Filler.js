import React from 'react';

class Filler extends React.Component {
  render () {
    // console.log(this.props.pourcentage);
    return (
      <div
        className="filler"
        style={{ width: `${this.props.pourcentage}%` }}  
      ></div>
    );
  }
}

export default Filler;