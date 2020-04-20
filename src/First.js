import React, { Component } from 'react';
import FirstBackground from "./images/First-Background.jpg";
import FirstTexture from "./images/First-Texture.gif";
import FirstEagle from "./images/First-Eagle.gif";

export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      done: undefined,
      isPageActive: true,
      isEagleActive: false,
    };
  }

  componentDidMount(){
    this.showEagle();
  }

  // showEagle = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       isEagleActive: true,
  //     });
  //   }, 5000);
  // }
  //
  // handleEagleClick = () => {
  //   this.setState({
  //     isPageActive: false,
  //   });
  //
  //   this.handleSceneSwitch();
  // }
  //
  // handleSceneSwitch = (event) => {
  //   let pageName = "second";
  //   this.props.switchSceneFunction(pageName);
  //   }



render() {
  return (
    <div className = {this.state.isPageActive ? null : 'fadeOut'}>
    <div className = "First-Wrapper">
    {this.state.isEagleActive ? <div className = "First-EagleDiv"><img className = "First-Eagle" onClick = {this.handleEagleClick.bind(this)} src = {FirstEagle}/></div> : null}
    <img className = "First-Texture" src = {FirstTexture}/>
    <div className = "First-Background"></div>
    </div>
    </div>
  );
}
}
