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
import MediaQuery from 'react-responsive';
import Fullscreen from "react-full-screen";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeScene: 'first',
      isFullscreen: false,
      showCheckbox: true,
    };
  }



  switchScene = (sceneName) => {
    console.log(this.state.showCheckbox);
    setTimeout(() => {
      this.setState({
        activeScene: sceneName,
      });
    }, 2000);
    if (this.state.activeScene == "second") {
      this.setState({showCheckbox: false });
    }
  }

  goFullscreen = () => {
   this.setState({ isFullscreen: true });
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

  <MediaQuery query="(orientation: landscape)">
    <div>
      {this.state.showCheckbox ? <form className = "App-Fullscreen">
            <label><input
              name="isGoing"
              type="checkbox"
              checked={this.state.isFullscreen}
              onChange={this.goFullscreen.bind(this)} />
              GO FULLSCREEN</label>
      </form> : null}
      <Fullscreen enabled={this.state.isFullscreen} onChange={isFullscreen => this.setState({isFullscreen})}>
      {component}
       </Fullscreen>
    </div>}
    </MediaQuery>


<MediaQuery query="(orientation: portrait)">
    <div className = "Portrait-Div">
      <img className = "Portrait-Texture" src = {PortraitTexture}/>
      <img className = "Portrait-Icon" src = {PortraitIcon}/>
      <p>Please rotate your device.</p>
    </div>}
</MediaQuery>

    </div>
  );
}
}

export default App;
