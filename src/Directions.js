import React, { Component } from 'react';

export default class Directions extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: false,
    };
  }

  // handleBeginClick = () => {
  //   this.setState({
  //     isPageActive: false,
  //   });
  //
  //   this.handlePageSwitch();
  // }
  //
  // handlePageSwitch = (event) => {
  //   let pageName = "directions";
  //   this.props.switchPageFunction(pageName);
  //   }



render() {
  return (
    <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
    <div className = "Directions-Wrapper">

    </div>
    </div>
  );
}
}
