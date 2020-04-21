import React, { Component } from 'react';
import SecondBackground from "./images/Second-Background.jpg";
import SecondTexture from "./images/Second-Texture.gif";
import SecondEagle from "./images/Second-Eagle.gif";
import SecondButton from "./images/Second-Button.png";

export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoadDone: false,
      isPageActive: true,

    };
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
          isLoadDone: true,
        });
      }, 3500);
  }


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
    <div>
    {!this.state.isLoadDone ? (
      <div className = "First-Wrapper">
      <div className = "First-Text"> <p>LOADING...</p> </div>
      <img className = "First-Texture" src = {SecondTexture}/>
      <div className = "First-Background"></div>
      </div>
    )
    :

    (<div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
    <div className = "Second-Wrapper">
      <div className = "Second-Background"></div>
      <img className = "Second-Texture" src = {SecondTexture}/>
      <img className = "Second-Eagle" src = {SecondEagle}/>
      <div className = "Second-ButtonDiv"><img className = "Second-ButtonImage" src = {SecondButton}/></div>
    </div>
    </div>)}
    </div>
  );
}
}
