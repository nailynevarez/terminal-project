import React, { Component } from 'react';
import SecondTexture from "./images/Texture.gif";
import SecondEagle from "./images/Second-Eagle.gif";
import SecondButton from "./images/Second-Button.png";
import SecondTitle from "./images/Second-Title.png";
import IGStory from "./images/IGStory.jpg";


export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoadDone: false,
      isSceneActive: true,
      isTitleActive: true,
      isButtonClicked: false,
      isButtonActive: true,
      isInfoActive: false,
      isInfoTextActive: false,
    };
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

  showInfo = () => {
    setTimeout(() => {
        this.setState({
          isInfoActive: !this.state.isInfoActive,
          isInfoTextActive: !this.state.isInfoTextActive,
        });
      }, 500);

    this.setState({
      isTitleActive: !this.state.isTitleActive,
    });
  }

  hideInfo = () => {
    setTimeout(() => {
        this.setState({
          isInfoActive: !this.state.isInfoActive,
        });
      }, 400);

    setTimeout(() => {
        this.setState({
          isTitleActive: !this.state.isTitleActive,
        });
      }, 900);

    this.setState({
      isInfoTextActive: !this.state.isInfoTextActive,
    });
  }

  handleSceneSwitch = (event) => {
    let sceneName = "third";
    this.props.switchSceneFunction(sceneName);
    }



render() {
  return (
    <div>
    <div className = {this.state.isSceneActive ? "Second-WrapperWhite" : "Second-WrapperRed"}>

    {this.state.isInfoActive ? (
      <div className = {this.state.isInfoTextActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "Second-InfoDiv">
        <p className = "Second-InfoParagraph">Wavering Stripes is an interactive website about immigration detention in the United States. The project hopes to spread awareness on, and ignite action toward, ending immigration detention.</p>
        <p className = "Second-InfoParagraph">Created by visual artist <a target="_blank" href = "https://nailynevarez.com"> Naily Nevarez,</a> the project distorts the American flag — a symbol of pride — into the structure of a detention facility. Within the structure are individuals and their personal stories of struggle as immigrants. Each story further reveals the injustice and irony of immigration detention in the "land of the free."</p>
        <button className = "Second-InfoButtonHide" onClick={this.hideInfo.bind(this)}>
              <i className="Second-ArrowRight"></i></button>
        </div>
      </div>

    ) : (
    <div className = {this.state.isTitleActive ? 'fadeIn' : 'fadeOut'}>
          <div className = 'Second-Background'></div>
          <img className = "Second-Texture" src = {SecondTexture}/>
          <div className = {this.state.isButtonActive ? null : 'fadeOut'}>
            <div className = "Second-TitleDiv">
              <img className = "Second-Title" src = {SecondTitle}/>
              <p className = "Second-Subtitle">The deadly impact of immigration detention in the United States</p>
            </div>
          </div>

          <img className = {this.state.isButtonClicked ? 'Second-EagleAway' : 'Second-Eagle'} src = {SecondEagle}/>
          <div className = {this.state.isButtonActive ? 'fadeIn' : 'fadeOut'}>
          <button className = "Second-InfoButtonShow" onClick={this.showInfo.bind(this)}>
                i</button>
            <div className = 'Second-ButtonDiv'>
              <img className = "Second-Button" onClick={this.handleButtonClick.bind(this)} src = {SecondButton}/>
            </div>
            <div className = "Second-Sharing">
              <a className = "Second-Twitter"  target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-url="https://www.waveringstripes.com" data-show-count="false"><i></i><span className = "label">Tweet</span></a>
              <a className = "Second-Facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.waveringstripes.com%2F&amp;src=sdkpreparse"><span className = "label">Share</span></a>
              <a className = "Second-Instagram" target = "_blank" href={IGStory} ><span className = "label">IG Story</span></a>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
}
