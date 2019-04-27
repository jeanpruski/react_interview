import React from 'react';
import Filler from './Filler';

class ProgressBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      likes: this.props.likes,
      dislikes: this.props.dislikes,
    }
  }

  componentDidMount() {
    // this.changeLike();
  }

  componentDidUpdate() {
    // console.log(this.props.likes)
  }

  // changeLike() {

  //   let total = this.state.likes + this.state.dislikes;

  //   let pourcentage = (this.state.likes / total) * 100;

  //   this.setState({
  //     pourcentage: pourcentage
  //   })
  // }

  render () {
    
    // console.log(this.props.pourcentage)

    return (
      <div className="progress-bar">
        <Filler pourcentage={this.props.pourcentage}/>
        {/* {this.props.likes} - 
        {this.props.dislikes} */}

      </div>
    );
  }
}

export default ProgressBar;