import React, { Component } from 'react';
import SecondBackground from "./images/Second-Background.jpg";
import SecondTexture from "./images/Second-Texture.gif";
import SecondEagle from "./images/Second-Eagle.gif";

export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,

    };
  }

  // componentDidMount(){
  //   this.showEagle();
  // }
  //
  // showEagle = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       isEagleActive: true,
  //     });
  //   }, 5000);
  // }
  //
  //
  // handleEagleClick = () => {
  //   this.setState({
  //     isPageActive: false,
  //   });
  //
  //   this.handlePageSwitch();
  // }
  //
  // handlePageSwitch = (event) => {
  //   let pageName = "second";
  //   this.props.switchPageFunction(pageName);
  //   }



render() {
  return (
    <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
    <div className = "Second-Wrapper">
      <div className = "Second-Background"></div>
      <img className = "Second-Texture" src = {SecondTexture}/>
      <img className = "Second-Eagle" src = {SecondEagle}/>
    </div>
    </div>
  );
}
}
