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
      showRow6Person1: false,
      showRow3Person1: false,
      showRow11Person1: false,
      showPersonWrapper: false,
      showRedBackground: null,
      showActionButton: false,
      isDirectionActive: true,
      showActionContent: false,
    };
  }

  componentDidMount(){

  }



  handleButtonClick = () => {
    this.setState({
      isSceneActive: false,
    });

    setTimeout(() => {
        this.handleSceneSwitch();
      }, 1500);
  }

  handleSceneSwitch = (event) => {
    let sceneName = "second";
    this.props.switchSceneFunction(sceneName);
    }

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

  showRow6Person1 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow6Person1: true,
      showRedBackground: false,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow3Person1 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow3Person1: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow11Person1 = () => {
    this.setState({
      showPersonWrapper: true,
      showRow11Person1: true,
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
      showRow1Person1: false,
      showRow6Person1: false,
      showRow3Person1: false,
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

          {this.state.showRow6Person1 ?
            <div className = "Fourth-Person">
            <img className = "Fourth-Portrait" src = {NebaneAbienwi}/>
            <div className = "Fourth-Writing">
              <p className = "Fourth-Title" >NEBANE ABIENWI</p>
              <div className = "Fourth-SubTitle">
                <p>37-year-old man</p>
                <p>Held in California</p>
                <p>Immigrated from Cameroon</p>
              </div>
              <div className = "Fourth-Story">
                <p>Nebane Abienwi was a father of three fleeing civil war conflicts in Cameroon. After <a target = "_blank" href="https://www.thenation.com/article/world/ice-death-negligence/">traveling</a> across 3 continents and 9 countries, Nebane finally reached the United States and applied for admission on September 5th, 2019 at the San Ysidro Port of Entry in California.</p>
                <p>U.S. Customs and Border Protection officers detained Nebane at the San Ysidro Admissibility Enforcement Unit, and he was later transferred to the Otay Mesa Detention Center ― a for-profit firm ― on September 19th while he awaited the next step of the asylum process.</p>
                <p>During his medical examination, Nebane reported a 3-day hospitalization in Mexico only 3 weeks ago for severe hypertension.</p>
                <p>On September 26th, Nebane allegedly fell off his top bunk onto the floor. A registered nurse observed him confused, sweating, not responding to commands, and paralyzed from the left side. He was taken to Sharp Chula Vista Medical Center and admitted to the intensive care unit. There, he was diagnosed with acute severe right intraparenchymal hemorrhage (bleeding within the brain).</p>
                <p>On October 1st, 2019, the hospital declared Nebane brain-dead and contacted his family. His family requested Nebane be kept on life support until a family member could arrive at the hospital. Despite the family’s wishes, the hospital removed Nebane from the ventilator at 2:37 p.m.</p>
                <p>In a later interview, Dr. John Flack, hypertension specialist and Chair of the Department of Internal Medicine at Southern Illinois University, expressed Nebane was likely a victim of medical negligence, expressing it was inconceivable he was allowed to enter the detention facility after having recently been hospitalized.</p>
                <p>Moreover, past cases reveal Otay Mesa Detention Center has a <a target = "_blank" href = "https://www.latimes.com/california/story/2019-10-05/cameroon-death-ice-custody-black-immigrants-rights">history</a> of abuse, particularly toward specific ethnic groups that include Cameroonians.</p>
              </div>
              </div>
              </div> : null}

            {this.state.showRow3Person1 ?
              <div className = "Fourth-Person">
              <img className = "Fourth-Portrait" src = {MariaRamirez}/>
              <div className = "Fourth-Writing">
                <p className = "Fourth-Title" >MARIA CELESTE OCHOA YOC DE RAMIREZ</p>
                <div className = "Fourth-SubTitle">
                  <p>22-year-old woman</p>
                  <p>Held in Texas & Oklahoma</p>
                  <p>Immigrated from Guatemala</p>
                </div>
                <div className = "Fourth-Story">
                  <p>On September 5, 2019, Maria Celeste Ochoa Yoc de Ramirez was apprehended by U.S. Border Patrol in the Rio Grande Valley, Texas. She was first transferred to El Valle Detention Facility in Raymondville, Texas.</p>
                  <p>On September 6th, 2019, a registered nurse performed a medical screening. Maria did not report any health conditions, except an allergy to the antibiotic gentamycin.</p>
                  <p>About a week later, Maria disclosed that she had been suffering from post-traumatic stress disorder (PTSD) from a history of sexual assault. She described having disruptive nightmares and resorted to excessive sleep during the day to cope. Moreover, the mental examiner noted Maria’s tearful and sad mood. She was prescribed Terazosin, a drug often used to reduce sleep-related disorders in PTSD. Over the next 4 months, Maria was not evaluated for any progress on her PTSD symptoms.</p>
                  <p>On February 2nd,  2020, Maria was examined for vomiting, weight loss, and muscle aches by a licensed vocational nurse (LVN). According to the LVN, her vital signs appeared normal, except with an abnormal pulse and a loss of 14 pounds since November 20th. The LVN documented the exam as normal.</p>
                  <p>The next day, a registered nurse (RN) saw Maria for complaints of shortness of breath and nausea. Her vital signs were allegedly normal, except with an abnormal pulse and diminished right lung sounds. The RN referred Maria to a medical provider for an x-ray, which returned negative.</p>
                  <p>On February 5th, detainees reported to the security staff that they had witnessed Maria self-induce vomiting after her meals. The following day, an RN assessed Maria for anxiety and poor sleep. Maria described “feeling as though her heart was stopping and she was dying.” Meanwhile, the security staff discovered several pills under Maria’s mattress.</p>
                  <p>After receiving alarming laboratory results, she was sent to the Alliance Health Ponca City emergency department in Ponca City, OK, where she was diagnosed with cholecystitis (inflammation of the gallbladder) and acute biliary pancreatitis (inflammation of the pancreas).
                  After having her gallbladder removed, she was sent to Kay County Detention Center (KCDC). She continued to have several health problems throughout her stay at KCDC including weakness, nausea, and abdominal pain. </p>
                  <p>On February 18th, Maria was referred to Texas Health Huguley Hospital for further laboratory tests. There, a CT scan and chest x-rays showed: possible pancreatitis; an enlarged, inflamed liver with fibrosis (scarring); abnormal uterine appendages (which could relate to an ovarian cyst); bilateral atelectasis (partial collapse of the lung) with trace left pleural effusion (buildup of fluid); atypical pneumonitis (inflammation of the lungs); and bilateral alveolar disease (affects the alveoli of the lungs).</p>
                  <p>After being treated, Maria’s condition improved. However, on March 5th, she had difficulty breathing and was transferred to the intensive care unit. She experienced a seizure, and after being resuscitated, was put on a ventilator. In the following days, her condition worsened.</p>
                  <p>On March 8th, Maria experienced cardiac arrest 3 times. Health providers were unable to resuscitate her, and she passed away at 8:45 a.m.</p>
                  <p>Rafael Ochoa, Maria’s sister, has expressed in <a target = "_blank" href = "https://www.dallasnews.com/news/2020/03/10/guatemalan-asylum-seeker-dies-in-ice-custody-in-fort-worth-hospital/">interviews</a> that before immigrating from Guatemala, her sister did not ever suffer from any chronic diseases. Her sister, she described, was full of life at only 22 years old.</p>
                </div>
                </div>
                </div> : null}

            {this.state.showRow11Person1 ?
              <div className = "Fourth-Person">
              <img className = "Fourth-Portrait" src = {EfrainDeLaRosa}/>
              <div className = "Fourth-Writing">
                <p className = "Fourth-Title" >EFRAIN DE LA ROSA</p>
                <div className = "Fourth-SubTitle">
                  <p>40-year-old man</p>
                  <p>Held in Georgia</p>
                  <p>Immigrated from Mexico</p>
                </div>
                <div className = "Fourth-Story">
                  <p>Efrain had been living in the United States for 17 years before he was apprehended by Immigrations Customs Enforcement (ICE) while on his way back to Mexico. He was transferred to the Steward Detention Center (SDC) in Steward County, Georgia, managed by the for-profit company CoreCivic Inc.</p>
                  <p>Upon arriving at the SDC on March 13th, 2018, Efrain reported to the registered nurse (RN) that he dealt with schizophrenia, a mental illness that affects emotion, thought, and behavior. Though he described having some auditory hallucinations in the past, Efrain reported feeling well overall and denied having any suicidal thoughts. Moreover, a mental health evaluation conducted later that week by a psychologist found Efrain to be mentally stable.</p>
                  <p>From April 3rd to April 18th, Efrain was placed in solitary confinement, a form of imprisonment in which detainees live in single cells with little to no contact to other inmates. During this time, a licensed correctional social worker (LCSW) asked Efrain about taking medication; Efrain refused.</p>
                  <p>On April 24th, Efrain described having auditory hallucinations. He explained to the advanced practice provider (APP) that he would be dead in 3 days and that he felt he was a danger to himself and others. Following this, the APP placed him on suicide watch in the medical housing unit (MHU).</p>
                  <p>Over the next 6 days, Efrain’s status did not improve; he continued describing auditory and visual hallucinations. The staff felt he was unable to progress in the current environment, so they transferred him to the Columbia Regional Care Center (CRCC).</p>
                  <p>Efrain spent a little over a month at the care center, and his health improved. When returning to the SDC on June 12th, Efrain reported that he was taking medication. However, in another meeting with an LCSW, Efrain explained that he did not want to continue medications because he did not need it. He stated that he would die 3 terrible deaths in the future, but that he would never kill himself. Efrain was released to the general population, but after he continued to refuse medication, he was transferred to solitary confinement on June 19th.</p>
                  <p>On June 20th, an LCSW evaluated Efrain and recorded his limitation in mental functioning, his refusal of medication administration, and the potential of his behavior worsening. Between June 20th and July 10th, Efrain remained in solitary confinement.</p>
                  <p>On the last day of this period, an RN who evaluated Efrain described that he was answering questions appropriately and that he denied any suicidal ideas. On the same day, Efrain expressed to an LCSW that he was going to die and did not want to continue taking medication. The LCSW documented that Efrain would benefit from a referral to a mental health facility with a higher level of care.</p>
                  <p>Later that night, custody officers called a medical emergency  ―  an officer found Efrain unresponsive, hanging from the railing of his upper bunk. The officer cut down the noose and began cardiac pulmonary resuscitation (CPR). While continuing CPR, emergency medical services arrived and transported Efrain to Southwest Georgia Regional Medical Center, At 11:39 p.m., Efrain passed away.</p>
                  <p><a target = "_blank" href = "https://www.hsdl.org/?view&did=28967">Federal standards</a> describe immigration detainees held in isolation must be “personally observed” at least every 30 minutes. If detainees are suicidal, they must be observed every 15-minutes. The Intercept accessed hundreds of pages of records, photos, audio with witnesses and correctional staff, and 18 hours of security footage from within the facility. <a target = "_blank" href = "https://theintercept.com/2019/08/29/ice-solitary-mental-health-corecivic/">Evidence</a> shows the facility did not check on Efrain for two hours before he killed himself.</p>
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

      <div className = "Fourth-Silhouettes">

      <img className = "Fourth-Row8Person1" src = {Row8Person1}
          onClick={this.showRow8Person1.bind(this)}/>
      <img className = "Fourth-Row8Person1-Red" src = {Row8Person1Red}/>

      <img className = "Fourth-Row3Person2" src = {Row3Person2}
          onClick={this.showRow3Person2.bind(this)}/>
      <img className = "Fourth-Row3Person2-Red" src = {Row3Person2Red}/>

      <img className = "Fourth-Row1Person1" src = {Row1Person1}
          onClick={this.showRow1Person1.bind(this)}/>
      <img className = "Fourth-Row1Person1-Red" src = {Row1Person1Red}/>

      <img className = "Fourth-Row6Person1" src = {Row6Person1}
          onClick={this.showRow6Person1.bind(this)}/>
      <img className = "Fourth-Row6Person1-Red" src = {Row6Person1Red}/>

      <img className = "Fourth-Row3Person1" src = {Row3Person1}
          onClick={this.showRow3Person1.bind(this)}/>
      <img className = "Fourth-Row3Person1-Red" src = {Row3Person1Red}/>

      <img className = "Fourth-Row11Person1" src = {Row11Person1}
          onClick={this.showRow11Person1.bind(this)}/>
      <img className = "Fourth-Row11Person1-Red" src = {Row11Person1Red}/>

      </div>

      <button onClick={this.handleButtonClick.bind(this)} className = {this.state.isSceneActive ? "Fourth-Home-FadeIn" : "Fourth-Home-FadeOut"}>HOME</button>

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
