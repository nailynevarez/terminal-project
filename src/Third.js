import React, { Component } from 'react';
import ThirdFlagLarge from "./images/Third-FlagLarge.gif";
import ThirdFlagSmall from "./images/Third-FlagSmall.gif";
import ThirdFlagDistortLarge from "./images/Third-FlagDistortLarge.gif";
import ThirdFlagDistortSmall from "./images/Third-FlagDistortSmall.gif";
import ThirdTexture from "./images/Texture.gif";
import FourthFlagLarge from "./images/Fourth-FlagLarge.png";
import FourthFlagSmall from "./images/Fourth-FlagSmall.png";


export default class Third extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSceneActive: true,
    };
  }

  componentDidMount(){

    setTimeout(() => {
          this.handleSceneSwitch();
        }, 13000);

  }

  handleSceneSwitch = (event) => {
    let sceneName = "fourth";
    this.props.switchSceneFunction(sceneName);
    }



render() {
  return (
    <div className = "Third-WrapperRed">
    <div className = {this.state.isSceneActive ? 'fadeIn' : 'none'}>
    <img className = "Third-Texture" src = {ThirdTexture}/>
    <div className = "Third-FlagDivs">
      <img className= "Third-Fourth-FlagLarge" src = {FourthFlagLarge}/>
      <img className= "Third-Fourth-FlagSmall" src = {FourthFlagSmall}/>
      <img className = "Third-FlagDistortLarge" src = {ThirdFlagDistortLarge}/>
      <img className = "Third-FlagDistortSmall" src = {ThirdFlagDistortSmall}/>
      <img className = "Third-FlagSmall" src = {ThirdFlagSmall}/>
      <img className = "Third-FlagLarge" src = {ThirdFlagLarge}/>
    </div>
    <div className = 'Third-Background'></div>
    </div>
    </div>
  );
}
}
