import React, { Component } from 'react';


export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,

    };
  }

  // componentDidMount(){
  //   this.showEagle();
  // }
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
    <div className = "Second-Wrapper">
    <p>This is the second page!</p>
    </div>
    </div>
  );
}
}
