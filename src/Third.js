import React, { Component } from 'react';


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
    <div>
    <p>This is the third scene.</p>
    </div>
  );
}
}
