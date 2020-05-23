import React, { Component } from 'react';
import SecondTexture from "./images/Texture.gif";


export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoadDone: false,
      isSceneActive: true,
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

    setTimeout(() => {this.handleSceneSwitch();}, 500);
  }

  handleSceneSwitch = (event) => {
    let sceneName = "second";
    this.props.switchSceneFunction(sceneName);
    }



render() {
  return (


    <div>
    {!this.state.isLoadDone ? (
      <div className = "First-Wrapper">
      <div className = "First-TextLoad"> <p>LOADING...</p> </div>
      <img className = "First-Texture" src = {SecondTexture}/>
      <div className = "First-Background"></div>
      </div>
    )
    :

    (
      <div className = "First-Wrapper">
      <div className = {this.state.isButtonActive ? 'none' : 'fadeOut'}>
      <div className = "First-TextWarning">
      <p>This site contains content that some visitors may find triggering or disturbing (incarceration, suicide, abuse, hunger). Please continue with caution. </p>
      <p onClick={this.handleButtonClick.bind(this)} className = "First-Link">Proceed to site</p>
      </div>
      </div>
      <img className = "First-Texture" src = {SecondTexture}/>
      <div className = "First-Background"></div>
      </div>
    )}
    </div>
  );
}
}
