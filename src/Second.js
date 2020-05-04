import React, { Component } from 'react';
import SecondTexture from "./images/Texture.gif";
import SecondEagle from "./images/Second-Eagle.gif";
import SecondButton from "./images/Second-Button.png";

export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoadDone: false,
      isSceneActive: true,
      isButtonClicked: false,
      isButtonActive: true,
    };
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
          isLoadDone: true,
        });
      }, 3500);
  }



  handleButtonClick = () => {
    this.setState({
      isButtonActive: false,
    });

    setTimeout(() => {
        this.setState({
          isButtonClicked: true,
        });
      }, 1000);


    setTimeout(() => {
          this.setState({
            isSceneActive: false,
          });
          this.handleSceneSwitch();
        }, 4500);

  }

  handleSceneSwitch = (event) => {
    let sceneName = "third";
    this.props.switchSceneFunction(sceneName);
    }



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

    (
    <div className = {this.state.isSceneActive ? "Second-WrapperWhite" : "Second-WrapperRed"}>
    <div className = {this.state.isSceneActive ? 'fadeIn' : 'fadeOut'}>
      <div className = 'Second-Background'></div>
      <img className = "Second-Texture" src = {SecondTexture}/>
      <img className = {this.state.isButtonClicked ? 'Second-EagleAway' : 'Second-Eagle'} src = {SecondEagle}/>
      <div className = {this.state.isButtonActive ? 'fadeIn' : 'fadeOut'}>
        <div className = 'Second-ButtonDiv'>
          <img className = "Second-Button" onClick={this.handleButtonClick.bind(this)} src = {SecondButton}/>
        </div>
      </div>
    </div>
    </div>)}
    </div>
  );
}
}
