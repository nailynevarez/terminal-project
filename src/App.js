import React, { Component } from 'react';
import Directions from './Directions.js';
import './sass/main.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeScene: 'directions',
    };
  }

  switchScene = (sceneSwitch) => {
    setTimeout(() => {
      this.setState({
        activeScene: sceneSwitch,
      });
    }, 2000);
  }



render() {

  let component = null;
      switch (this.state.activeScene) {
        case 'directions':
          component = <Directions switchSceneFunction = {this.switchScene}/>;
          break;
        }
  return (
    <div className="App-Wrapper">
    {component}
    </div>
  );
}
}

export default App;
