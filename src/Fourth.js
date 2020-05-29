import React, { Component } from 'react';
import FourthTexture from "./images/Texture.gif";
import FourthFlagLarge from "./images/Fourth-FlagLarge.png";
import FourthFlagSmall from "./images/Fourth-FlagSmall.png";
import FourthPeople from "./images/Fourth-People.png";
import Row8Person1 from "./images/Row8Person1.png";
import Row8Person1Red from "./images/Row8Person1-Red.png";
import KamyarSamimi from "./images/KamyarSamimi.png";
import FourthArrow from "./images/Fourth-Arrow.png";
import Row3Person2 from "./images/Row3Person2.png";
import Row3Person2Red from "./images/Row3Person2-Red.png";
import JohanaMedinaLeon from "./images/JohanaMedinaLeon.png";



export default class Fourth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSceneActive: true,
      showRow8Person1: false,
      showRow3Person2: false,
      showPersonWrapper: false,
      showRedBackground: null,
      showHelp: false,
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
      showHelp: true,
    });
  }

  showRow3Person2 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow3Person2: true,
      showRedBackground: true,
      showHelp: true,
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

    {this.state.showHelp ? <button className = "Fourth-Help">TAKE ACTION</button>  : null}

    {this.state.showPersonWrapper ? (
      <div className = {this.state.showPersonWrapper ? 'fadeIn' : 'fadeOut'}>
      <img className = "Fourth-Texture" src = {FourthTexture}/>
      <div className = {this.state.showRedBackground ? "Fourth-ArrowPerson-Red": "Fourth-ArrowPerson-White"}>
      <img className = "Fourth-Arrow" src = {FourthArrow} onClick={this.showFlag.bind(this)} />



      {this.state.showRow8Person1 ?
        <div className = "Fourth-Person">
        <img className = "Fourth-Portrait" src = {KamyarSamimi}/>
        <div className = "Fourth-Writing">
          <p className = "Fourth-Title" >KAMYAR SAMIMI</p>
          <div className = "Fourth-SubTitle">
            <p>64 year-old man </p>
            <p>Held in Colorado</p>
            <p>Immigrated from Iran</p>
          </div>
          <div className = "Fourth-Story">
            <p>Kamyar came to the United States as a student in 1976 and became a Legal Permanent Resident in 1978. In Colorado, he worked as a mechanic while raising three children.</p>
            <p>On November 17th, 2017, Kamyar was arrested at his home and accused of controlled substance violation.</p>
            <p>During his intake screening, Kamyar reported that he was taking between 150 - 190mg of methadone daily -- an opioid medication he had been legally taking for 20 years. He expressed he was beginning to experience methadone withdrawal symptoms. Nurses received orders from the physician to house the detainee in medical observation, but the physician did not order monitoring of Kamyar’s withdrawal symptoms with any medical instruments.</p>
            <p>Kamyar remained in the medical unit for 16 days, and although his conditions indicated a need for withdrawal medication, nurses administered less than half the doses ordered. Moreover, the physician never physically examined Kamyar.</p>
            <p>Nursing notes and video surveillance footage revealed a severe deterioration in Kamyar’s health. Conditions included but were not limited to: tremors, nausea and vomiting, refusing meals, inability to sit up on a bed or in a wheelchair, and signs of dehydration. In interviews, nurses expressed they believed Kamyar was exaggerating his symptoms and did not see an urgent need to notify the physician of his condition.</p>
            <p>During the morning of November, as two officers and a nurse attempted to move Kamyar into a wheelchair, he began to seizure. Over the next 6 minutes, the nurse made unsuccessful attempts to contact the physician, while the officers called their Lieutenant, who directed they call 911. Emergency Medical Services arrived on the scene 4 minutes later, and Kamyar stopped breathing on the way to the Emergency Room (ER). The ER staff were unable to resuscitate Kamyar, and he was pronounced dead at 12:02pm.</p>
            <p>The Aurora Contract Detention Facility, the facility where Kamyar was held, was a for-profit detention center operated by GEO Group Inc. On November 12 2019, The family of Kamyar filed a lawsuit with the ACLU of Colorado against GEO Inc. for the wrongful death of Kamyar Samimi. </p>
          </div>
          </div>
          </div> : null}


          {this.state.showRow3Person2 ?
            <div className = "Fourth-Person">
            <img className = "Fourth-Portrait" src = {JohanaMedinaLeon}/>
            <div className = "Fourth-Writing">
              <p className = "Fourth-Title" >JOHANA MEDINA LEON</p>
              <div className = "Fourth-SubTitle">
                <p>25 year-old transgender woman</p>
                <p>Held in New Mexico</p>
                <p>Immigrated from El Salvador</p>
              </div>
              <div className = "Fourth-Story">
                <p>Johana Media Leon was a certified nurse in El Salvador, but was not able to openly practice because she was living openly as a transgender woman. She immigrated to the United States seeking asylum, and legally entered through a port of entry.</p>
                <p>On April 11th, 2019, Johana entered the U.S through Paso Del Norte Port of Entry in El Paso, New Mexico and was transferred to Otero County Processing Center, a private detention facility for ICE detainees. Despite identifying as a woman at the port of entry, Johana was sent to an all-male facility.</p>
                <p>In the coming weeks, her health declined. Johana told staff at the Otero County Processing Center she needed an IV solution. She explained she could do it herself, but just needed the medication. Johana asked for water, sugar and salt so she could make her own IV; her requests were repeatedly denied.</p>
                <p>In phone calls with her sister, Johana expressed that she wished to be deported to El Salvador so she could receive medical attention.</p>
                <p>On May 18th, Johana finally received her credible fear interview and passed. She was ordered to appear before a judge on May 22nd - the first step in the asylum process.</p>
                <p>However, on May 28th, Johana became even more ill with severe chest pain and eventually became unconscious. She was transferred to Del Sol Medical Center in El Paso, Texas, and ICE released her from custody.</p>
                <p>Four days later, on June 1st, Johana passed away of pneumonia.</p>
                <p>ICE is required by Congress to report the death of any migrants in its custody within 30 days and release a final report to the public within 60 days. Because Johana was released from ICE custody the same day she was sent to the hospital, her death is not considered in-custody, and a report was never released by ICE.</p>
              </div>
              </div>
              </div> : null}

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
      <img className = "Fourth-Row3Person2" src = {Row3Person2}
          onClick={this.showRow3Person2.bind(this)}/>
      <img className = "Fourth-Row3Person2-Red" src = {Row3Person2Red}/>
      </div>

    )
    }

    </div>
  );
}
}
