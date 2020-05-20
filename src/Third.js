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
      isDistortActive: false,
    };
  }

  componentDidMount(){
  setTimeout(() => {
    this.setState({
      isDistortActive: true,
    });
  }, 9500);

    setTimeout(() => {
          this.handleSceneSwitch();
        }, 13200);

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
    {this.state.isDistortActive ?
          <img className = "Third-FlagDistortLarge" src = {ThirdFlagDistortLarge}/>
          : null }

    {this.state.isDistortActive ?
          <img className = "Third-FlagDistortSmall" src = {ThirdFlagDistortSmall}/>
          : null }

      <img className = "Third-FlagSmall" src = {ThirdFlagSmall}/>
      <img className = "Third-FlagLarge" src = {ThirdFlagLarge}/>
    </div>
    <div className = 'Third-Background'></div>
    </div>
    </div>
  );
}
}
