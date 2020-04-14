import React, { Component } from 'react';
import FirstBackground from "./images/First-Background.jpg";
import FirstTexture from "./images/First-Texture.gif";
import FirstEagle from "./images/First-Eagle.gif";

export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isEagleActive: false,
    };
  }

  componentDidMount(){
    this.showEagle();
  }

  showEagle = () => {
    setTimeout(() => {
      this.setState({
        isEagleActive: true,
      });
    }, 5000);
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
    <div>
    <div className = "First-Wrapper">
    {this.state.isEagleActive ? <div className = "First-EagleDiv"><img className = "First-Eagle" src = {FirstEagle}/></div> : null}
    <img className = "First-Texture" src = {FirstTexture}/>
    <img className = "First-Background" src = {FirstBackground} />
    </div>
    </div>
  );
}
}
