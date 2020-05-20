import React, { Component } from 'react';
import FourthTexture from "./images/Texture.gif";
import FourthFlagLarge from "./images/Fourth-FlagLarge.png";
import FourthFlagSmall from "./images/Fourth-FlagSmall.png";
import FourthPeople from "./images/Fourth-People.png";



export default class Fourth extends Component {
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
    <div className = "Fourth-Wrapper">
    <img className = "Fourth-Texture" src = {FourthTexture}/>
    <img className = "Fourth-People" src = {FourthPeople}/>
    <img className= "Fourth-FlagLarge" src = {FourthFlagLarge}/>
    <img className= "Fourth-FlagSmall" src = {FourthFlagSmall}/>
    <div className = 'Fourth-Background'></div>
    </div>
  );
}
}
