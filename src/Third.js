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
      isFlagWaving: true,
      isFlagDistorting: false,
      isFlagDistorted: false,
    };
  }

  componentDidMount(){

    setTimeout(() => {
        this.setState({
          isFlagDistorting: true,
        });
      }, 8900);
    setTimeout(() => {
        this.setState({
          isFlagWaving: false,
        });
      }, 9000);

      setTimeout(() => {
          this.setState({
            isFlagDistorted: true,
          });
        }, 12000);

      setTimeout(() => {
          this.setState({
            isFlagDistorting: false,
          });
        }, 12200);


    setTimeout(() => {
          this.handleSceneSwitch();
        }, 12500);

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

      {this.state.isFlagWaving ? <img className = "Third-FlagSmall" src = {ThirdFlagSmall}/> : null }
      {this.state.isFlagWaving ? <img className = "Third-FlagLarge" src = {ThirdFlagLarge}/> : null}

      {this.state.isFlagDistorting ? <img className = "Third-FlagDistortLarge" src = {ThirdFlagDistortLarge}/> : null}
      {this.state.isFlagDistorting ? <img className = "Third-FlagDistortSmall" src = {ThirdFlagDistortSmall}/> : null}



      {this.state.isFlagDistorted ? <img className= "Third-Fourth-FlagLarge" src = {FourthFlagLarge}/> : null }
      {this.state.isFlagDistorted ? <img className= "Third-Fourth-FlagSmall" src = {FourthFlagSmall}/> : null}
        </div>
        <div className = 'Third-Background'></div>
      </div>
    </div>
  );
}
}
