import React, { Component } from 'react';
import FirstBackground from "./images/First-Background.jpg";
import FirstTexture from "./images/First-Texture.gif";

export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
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
    <div className = "First-Wrapper">
    <img className = "First-Texture" src = {FirstTexture}/>
    <img className = "First-Background" src = {FirstBackground} />
    </div>
    </div>
  );
}
}
