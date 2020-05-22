import React, { Component } from 'react';
import Directions from './Directions.js';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';
import Fourth from './Fourth.js';
import './sass/newmain.css';
import PortraitTexture from "./images/Texture.gif";
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import PortraitIcon from "./images/Portrait-Icon.gif";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeScene: 'first',
    };
  }

  switchScene = (sceneName) => {
    setTimeout(() => {
      this.setState({
        activeScene: sceneName,
      });
    }, 2000);
  }



render() {

  let component = null;
      switch (this.state.activeScene) {
        case 'directions':
          component = <Directions switchSceneFunction = {this.switchScene}/>;
          break;
        case 'first':
          component = <First switchSceneFunction = {this.switchScene}/>;
          break;
        case 'second':
          component = <Second switchSceneFunction = {this.switchScene}/>;
          break;
        case 'third':
          component = <Third switchSceneFunction = {this.switchScene}/>;
          break;
        case 'fourth':
          component = <Fourth switchSceneFunction = {this.switchScene}/>;
          break;
        }
  return (
    <div className="App-Wrapper">
    <DeviceOrientation lockOrientation={'landscape'}>

        <Orientation orientation='landscape' alwaysRender={false}>
          <div>
            {component}
          </div>
        </Orientation>

        <Orientation orientation='portrait'>
          <div className = "Portrait-Div">
            <img className = "Portrait-Texture" src = {PortraitTexture}/>
            <img className = "Portrait-Icon" src = {PortraitIcon}/>
            <p>Please rotate your device.</p>
          </div>
        </Orientation>

      </DeviceOrientation>
    </div>
  );
}
}

export default App;
