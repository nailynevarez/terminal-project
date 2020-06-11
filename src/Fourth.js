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
import Row1Person1 from "./images/Row1Person1.png";
import Row1Person1Red from "./images/Row1Person1-Red.png";
import Row3Person1 from "./images/Row3Person1.png";
import Row3Person1Red from "./images/Row3Person1-Red.png";
import Row6Person1 from "./images/Row6Person1.png";
import Row6Person1Red from "./images/Row6Person1-Red.png";
import Row6Person2 from "./images/Row6Person2.png";
import Row6Person2Red from "./images/Row6Person2-Red.png";
import Row8Person2 from "./images/Row8Person2.png";
import Row8Person2Red from "./images/Row8Person2-Red.png";
import Row11Person1 from "./images/Row11Person1.png";
import Row11Person1Red from "./images/Row11Person1-Red.png";
import JohanaMedinaLeon from "./images/JohanaMedinaLeon.png";
import MergensanaAmar from "./images/MergensanaAmar.png";
import NebaneAbienwi from "./images/NebaneAbienwi.png";
import MariaRamirez from "./images/MariaRamirez.png";
import EfrainDeLaRosa from "./images/EfrainDeLaRosa.png";

export default class Fourth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSceneActive: true,
      showRow8Person1: false,
      showRow3Person2: false,
      showRow1Person1: false,
      showPersonWrapper: false,
      showRedBackground: null,
      showActionButton: false,
      isDirectionActive: true,
      showActionContent: false,
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
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow3Person2 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow3Person2: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow1Person1 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow1Person1: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showFlag = () => {
    this.setState({
      showPersonWrapper: false,
      showRow8Person1: false,
      showRow3Person2: false,
    });
  }

  showActionContent = () => {
    this.setState ({
      showActionContent: !this.state.showActionContent,
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



      {this.state.showRow8Person1 ?
        <div className = "Fourth-Person">
        <img className = "Fourth-Portrait" src = {KamyarSamimi}/>
        <div className = "Fourth-Writing">
          <p className = "Fourth-Title" >KAMYAR SAMIMI</p>
          <div className = "Fourth-SubTitle">
            <p>64-year-old man</p>
            <p>Held in Colorado</p>
            <p>Immigrated from Iran</p>
          </div>
          <div className = "Fourth-Story">
            <p>Kamyar Samimi came to the United States as a student in 1976 and became a Legal Permanent Resident in 1978. In Colorado, he worked as a mechanic while raising three children.</p>
            <p>On November 17th, 2017, Kamyar was arrested at his home and accused of controlled substance violation.</p>
            <p>When entering the Aurora Contract Detention Facility (ACDF), Kamyar reported that he was taking between 150 - 190mg of methadone daily ― an opioid medication he had been legally taking for 20 years. He expressed he was beginning to experience methadone withdrawal symptoms. Nurses received orders from the physician to house Kamyar in medical observation, but the physician did not order monitoring of Kamyar’s withdrawal symptoms with any medical instruments.</p>
            <p>Kamyar remained in the medical unit for 16 days, and although his conditions indicated a need for withdrawal medication, nurses administered less than half the doses ordered. Additionally, the physician never physically examined Kamyar.</p>
            <p>Nursing notes and video surveillance footage revealed a severe deterioration in Kamyar’s health. Conditions included but were not limited to: tremors, nausea, vomiting, refusing meals, inability to sit upon a bed or in a wheelchair, and signs of dehydration. In interviews, nurses expressed they believed Kamyar was exaggerating his symptoms and did not see an urgent need to notify the physician.</p>
            <p>During the morning of December 2nd, as two officers and a nurse attempted to move Kamyar into a wheelchair, he began to seizure. Over the next 6 minutes, the nurse made unsuccessful attempts to contact the physician, while the officers called their Lieutenant, who directed they call 911. Emergency Medical Services arrived on the scene, and Kamyar stopped breathing on the way to the Emergency Room (ER). The ER staff were unable to resuscitate Kamyar, and he was pronounced dead at 12:02 p.m.</p>
            <p>The ACDF was a for-profit detention center operated by GEO Group Inc. On November 12th, 2019, The family of Kamyar filed a <a target = "_blank" href ="https://aclu-co.org/aclu-of-colorado-sues-geo-for-the-wrongful-death-of-kamyar-samimi/">lawsuit</a> with the ACLU of Colorado against <a target = "_blank" href = "https://www.coloradoindependent.com/2019/08/15/geo-group-aurora-immigrant-detention-center/">GEO Inc.</a> for the wrongful death of Kamyar Samimi.</p>
          </div>
          </div>
          </div> : null}


          {this.state.showRow3Person2 ?
            <div className = "Fourth-Person">
            <img className = "Fourth-Portrait" src = {JohanaMedinaLeon}/>
            <div className = "Fourth-Writing">
              <p className = "Fourth-Title" >JOHANA MEDINA LEON</p>
              <div className = "Fourth-SubTitle">
                <p>25-year-old transgender woman</p>
                <p>Held in New Mexico</p>
                <p>Immigrated from El Salvador</p>
              </div>
              <div className = "Fourth-Story">
                <p>Johana Medina Leon was a certified nurse in El Salvador. However, she was not able to practice because she was living openly as a <a target = "_blank" href = "https://www.themujerista.com/the-blog/transgender-woman-and-asylum-seeker-johana-medina-leon">transgender woman.</a> She immigrated to the United States seeking asylum, and legally entered through a port of entry.</p>
                <p>After entering on April 11th, 2019, through the U.S through Paso Del Norte Port of Entry in El Paso, New Mexico, Johana was transferred to Otero County Processing Center, a private detention facility for Immigration Customs Enforcement (ICE) detainees. Despite identifying as a woman at the port of entry, Johana was sent to an all-male facility.</p>
                <p>In the coming weeks, her health declined. Johana told staff at the Otero County Processing Center she needed an IV solution. She explained she could do it herself, but just needed the medication. Johana asked for water, sugar and salt so she could make her own IV; her requests were repeatedly denied.</p>
                <p>In the coming weeks, she became <a target = "_blank" href = "https://rewire.news/article/2019/06/06/the-details-of-johana-medinas-detainment-and-death-matter/">severely ill.</a> Johana told the staff at the Otero County Processing Center she needed an IV solution. She explained she could do it herself, but just needed the medication. Johana asked for water, sugar, and salt so she could make her own IV, but her requests were repeatedly denied. In phone calls with her sister, Johana expressed that she wished to be deported to El Salvador so she could receive the medical attention she needed.</p>
                <p>On May 18th, Johana finally received her credible fear interview and passed. She was ordered to appear before a judge on May 22nd ― the first step in the asylum process.</p>
                <p>However, on May 28th, Johana experienced severe chest pain and eventually became unconscious. She was transferred to Del Sol Medical Center in El Paso, Texas, and ICE released her from custody.</p>
                <p>Four days later, on June 1st, Johana passed away from pneumonia.</p>
                <p>ICE is required by Congress to report the death of any migrants in its custody within 30 days and release a final report to the public within 60 days. Because Johana was released from ICE custody the same day she was sent to the hospital, her death is not considered in-custody; a report was never released by ICE.</p>
              </div>
              </div>
              </div> : null}

          {this.state.showRow1Person1 ?
            <div className = "Fourth-Person">
            <img className = "Fourth-Portrait" src = {MergensanaAmar}/>
            <div className = "Fourth-Writing">
              <p className = "Fourth-Title" >MERGENSANA AMAR</p>
              <div className = "Fourth-SubTitle">
                <p>40-year-old man</p>
                <p>Held in Washington</p>
                <p>Immigrated from Buryatia</p>
              </div>
              <div className = "Fourth-Story">
                <p>Mergensana Amar immigrated from Buryatia, a Russian republic in Siberia, just north of Mongolia. He arrived in the United States on December 5th, 2017. Seeking asylum, Mergensana turned himself in at San Ysidro Port of Entry in California to begin the asylum process.</p>
                <p>On December 19th, Mergensana was transferred to the Northwest Detention Center in Tacoma, Washington, and he stayed in this facility awaiting immigration proceedings for the following 9 months.</p>
                <p>9 months later ― around August 22nd, 2018 ― Mergensana began a hunger strike. During a medical examination, he explained he had “no intentions of eating” and that he would be protesting the length of time it took for the immigration courts to make a decision about his case.</p>
                <p>After missing 9 consecutive meals, Mergensana was admitted to the medical housing unit (MHU) for the hunger strike protocol. According to the mental status exam, Mergensana’s mental status was stable; he appeared goal-oriented and showed no signs of hallucinations. While he complained of body pain, he refused all pain medication and laboratory tests.</p>
                <p>Mergensana later <a target = "_blank" href = "https://crosscut.com/2018/11/ice-says-asylum-seeker-life-support">disclosed</a> to a reporter that when he had refused laboratory tests, “heavily armored people, with helmets and shields, came and surrounded him”.  They told him if he did not resume eating voluntarily, they would begin force-feeding him through a tube.</p>
                <p>Following these threats, Mergensana began to eat on October 16th. Though Mergensana requested to stay in solitary confinement, he was discharged to the general population. 10 days later, he was returned to the MHU after staff found a “long hand-made rope made of bedding” hidden in his cell ― a possible suicidal gesture.</p>
                <p>From October 28th to October 31st, Mergensana refused to answer questions or allow medical assessments. Consequently, the behavioral health provider implemented ten-minute irregular CO checks.</p>
                <p>From November 1st to the 4th, Mergensana refused to engage with behavioral staff, with notes describing Mergensana “hiding” or pulling the blanket over his head. The behavioral health provider considered Mergensana a “low-risk” for suicide.</p>
                <p>On November 11th, a CO had documented that Mergensana had missed a total of 46 meals since the beginning of his hunger strike.</p>
                <p>The next day, Mergensana began eating 100% of his meals and requested to return to the general population. He was returned to the general population.</p>
                <p>Three days later, on November 15th, Mergensana was hanging from a self-made ligature around his neck. He was transported to the local hospital and admitted to the intensive care unit (ICU) for an anoxic brain injury; tests conducted in the ICU later confirmed brain death.</p>
                <p>On November 24th, 2018, the hospital removed Mergensana from life support. He passed away at 6:05 p.m.</p>
                <p>In previous <a target = "_blank" href = "https://crosscut.com/2019/06/asylum-seeker-vowed-never-return-russia-his-death-ice-custody-sent-him-back">conversations</a> with reporters, Mergensana expressed how he feared to return to Russia. There, Russian skinheads had beaten and threatened him. Moreover, he described having been imprisoned for demonstrating for the independence of Buryatia, which has been under Russian rule since the 17th century.</p>
              </div>
              </div>
              </div> : null}

      </div>
      </div>



    )
    :
    (

      <div className = "Fourth-Wrapper-Flag">
      {this.state.showActionButton ?
        <div className = "Fourth-ActionDiv"><button onClick={this.showActionContent.bind(this)} className = "Fourth-Action">TAKE ACTION</button></div>  : null}
        {this.state.isDirectionActive ? <p className = "Fourth-Direction">CLICK ON THE BLINKING FIGURES</p> : null}
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

      <img className = "Fourth-Row1Person1" src = {Row1Person1}
          onClick={this.showRow1Person1.bind(this)}/>
      <img className = "Fourth-Row1Person1-Red" src = {Row1Person1Red}/>

      {this.state.showActionContent ? <div onClick={this.showActionContent.bind(this)} className = "Fourth-ActionContent">
      <p>This project was made with the support of <a href = "https://www.detentionwatchnetwork.org/" target = "_blank"> Detention Watch Network, </a> a national coalition dedicated to abolishing immigration detention in the United States. To help strengthen their work and contribute to the mission of ending immigration detention, please consider making a donation.</p>
      <a target = "_blank" href ="https://detentionwatchnetwork.z2systems.com/np/clients/detentionwatchnetwork/donation.jsp?campaign=25&&test=true"><button>HELP NOW</button></a>
      <p className = "Fourth-SubCaption">To stay informed and learn of other ways to contribute, follow Detention Watch Network on <a target = "_blank" href = "https://twitter.com/DetentionWatch">Twitter</a> and <a target = "_blank" href = "https://www.facebook.com/DetentionWatchNetwork">Facebook.</a></p>
      </div> : null}
      </div>

    )
    }

    </div>
  );
}
}
