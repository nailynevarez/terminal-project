import React, { Component } from 'react';
import ThirdFlagLarge from "./images/Third-FlagLarge.gif";
import ThirdFlagSmall from "./images/Third-FlagSmall.gif";
import ThirdFlagDistortLarge from "./images/Third-FlagDistortLarge.gif";
import ThirdTexture from "./images/Texture.gif";


export default class Third extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSceneActive: true,
    };
  }

  componentDidMount(){
  }



  // handleButtonClick = () => {
  //   this.setState({
  //     isButtonClicked: true,
  //   });
  //
  //   setTimeout(() => {
  //       this.setState({
  //         isPageActive: false,
  //       });
  //     }, 5000);
  // }
  //
  // handlePageSwitch = (event) => {
  //   let pageName = "third";
  //   this.props.switchPageFunction(pageName);
  //   }



render() {
  return (
    <div className = "Third-WrapperRed">
    <div className = {this.state.isSceneActive ? 'fadeIn' : 'fadeOut'}>
    <img className = "Third-Texture" src = {ThirdTexture}/>
    <div className = "Third-FlagDivs">
      <img className = "Third-FlagDistortLarge" src = {ThirdFlagDistortLarge}/>
      <img className = "Third-FlagSmall" src = {ThirdFlagSmall}/>
      <img className = "Third-FlagLarge" src = {ThirdFlagLarge}/>
    </div>
    <div className = 'Third-Background'></div>
    </div>
    </div>
  );
}
}
