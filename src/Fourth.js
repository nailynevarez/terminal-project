import React, { Component } from 'react';
import ThirdFlagLarge from "./images/Third-FlagLarge.gif";
import ThirdTexture from "./images/Texture.gif";


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
    <div>
    <p>This is the fourth scene! Welcome.</p>
    <div className = 'Fourth-Background'></div>
    </div>
    </div>
  );
}
}
