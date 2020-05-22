import React, { Component } from 'react';
import FourthTexture from "./images/Texture.gif";
import FourthFlagLarge from "./images/Fourth-FlagLarge.png";
import FourthFlagSmall from "./images/Fourth-FlagSmall.png";
import FourthPeople from "./images/Fourth-People.png";
import Row8Person1 from "./images/Row8Person1.png";
import Row8Person1Red from "./images/Row8Person1-Red.png";
import KamyarSamimi from "./images/KamyarSamimi.png";
import FourthArrow from "./images/Fourth-Arrow.png";



export default class Fourth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSceneActive: true,
      showRow8Person1: false,
      showPersonWrapper: false,
      showRedBackground: null,
    };
  }

  componentDidMount(){
  }



  // handleButtonClick = () => {
    // this.setState({
    //   isButtonClicked: true,
    // });
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

  showRow8Person1 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow8Person1: true,
      showRedBackground: false,
    });
  }

  showFlag = () => {
    this.setState({
      showPersonWrapper: false,
      showRow8Person1: false,
    });
  }



render() {
  return (
    <div className = "Fourth-Wrapper">

    {this.state.showPersonWrapper ? (
      <div className = {this.state.showPersonWrapper ? 'fadeIn' : 'fadeOut'}>
      <img className = "Fourth-Texture" src = {FourthTexture}/>
      <div className = {this.state.showRedBackground ? "Fourth-ArrowPerson-Red": "Fourth-ArrowPerson-White"}>
      <img className = "Fourth-Arrow" src = {FourthArrow} onClick={this.showFlag.bind(this)} />
      <div className = "Fourth-Person">
        <img className = "Fourth-Portrait" src = {KamyarSamimi}/>
        <div className = "Fourth-Writing">
          <p className = "Fourth-Title" >KAMYAR SAMIMI</p>
          <div className = "Fourth-SubTitle">
            <p>64 year-old man </p>
            <p> Lived in Colorado</p>
            <p>Immigrated from Iran</p>
          </div>
          <div className = "Fourth-Story">
            <p>Kamyar came to the United States as a student in 1976 and became a Legal Permanent Resident in 1978. In Colorado, he worked as a mechanic while raising three children.</p>
            <p>On November 17th, 2017, Kamyar was arrested at his home and accused of controlled substance violation.</p>
            <p>During his intake screening, Kamyar reported that he was taking between 150 - 190mg of methadone daily -- an opioid medication he had been legally taking for 20 years. He expressed he was beginning to experience methadone withdrawal symptoms. Nurses received orders from the physician to house the detainee in medical observation, but the physician did not order monitoring of Kamyar’s withdrawal symptoms with any medical instruments.</p>
            <p>Kamyar remained in the medical unit for 16 days, and although his conditions indicated a need for withdrawal medication, nurses administered less than half the doses ordered. Moreover, the physician never physically examined the detainee. </p>
            <p>Nursing notes and video surveillance footage revealed a severe deterioration in Kamyar’s health. Conditions included but were not limited to: tremors, nausea and vomiting, refusing meals, inability to sit up on a bed or in a wheelchair, and signs of dehydration. In interviews, nurses expressed they believed Kamyar was exaggerating his symptoms and did not see an urgent need to notify the physician of his condition.</p>
            <p>During the morning of November, as two officers and a nurse attempted to move Kamyar into a wheelchair, he began to seizure. Over the next 6 minutes, the nurse made unsuccessful attempts to contact the physician, while the officers called their Lieutenant, who directed they call 911. Emergency Medical Services arrived on the scene 4 minutes later, and Kamyar stopped breathing on the way to the Emergency Room (ER). The ER staff were unable to resuscitate Kamyar, and he was pronounced dead at 12:02pm.</p>
            <p>The Aurora Contract Detention Facility, the facility where Kamyar was held, was a for-profit detention center operated by GEO Group Inc. On November 12 2019, The family of Kamyar filed a lawsuit with the ACLU of Colorado against GEO Inc. for the wrongful death of Kamyar Samimi. </p>
          </div>
        </div>
      </div>
      </div>
      </div>



    )
    :
    (

      <div className = "Fourth-Wrapper-Flag">
      <img className = "Fourth-Texture" src = {FourthTexture}/>
      <img className = "Fourth-People" src = {FourthPeople}/>
      <img className= "Fourth-FlagLarge" src = {FourthFlagLarge}/>
      <img className= "Fourth-FlagSmall" src = {FourthFlagSmall}/>
      <div className = 'Fourth-Background'></div>
      <img className = "Fourth-Row8Person1" src = {Row8Person1}
          onClick={this.showRow8Person1.bind(this)}/>
      <img className = "Fourth-Row8Person1-Red" src = {Row8Person1Red}/>
      </div>

    )
    }

    </div>
  );
}
}
