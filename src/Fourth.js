import React, { Component } from 'react';
import FourthTexture from "./images/Texture.gif";
import FourthFlagLarge from "./images/Fourth-FlagLarge.png";
import FourthFlagSmall from "./images/Fourth-FlagSmall.png";
import FourthPeople from "./images/Fourth-People2.png";
import Row8Person1 from "./images/Row8Person1.png";
import Row8Person1Red from "./images/Row8Person1-Red.png";
import KamyarSamimi from "./images/KamyarSamimi.png";
import FourthArrow from "./images/Fourth-Arrow.png";
import Row3Person2 from "./images/Row3Person2.png";
import Row3Person2Red from "./images/Row3Person2-Red.png";
import Row1Person2 from "./images/Row1Person2.png";
import Row1Person2Red from "./images/Row1Person2-Red.png";
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
import CarlosVasquez from "./images/CarlosVasquez.png";
import MarieeJuarez from "./images/MarieeJuarez.png";
import JeanJimenezJoseph from "./images/JeanJimenezJoseph.png";

export default class Fourth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSceneActive: true,
      showRow8Person1: false,
      showRow8Person2: false,
      showRow3Person2: false,
      showRow1Person1: false,
      showRow1Person2: false,
      showRow6Person1: false,
      showRow6Person2: false,
      showRow3Person1: false,
      showRow11Person1: false,
      showPersonWrapper: false,
      showProfile: false,
      fadeInFlag: false,
      showRedBackground: null,
      showActionButton: false,
      isDirectionActive: true,
      showActionContent: false,
      showFAQContent: false,
      peopleCount: 0,
      isActionClicked: false,
    };
  }


  addCounter = () => {
    this.setState({
      peopleCount: this.state.peopleCount + 1,
    });
    if (this.state.peopleCount == 2 && this.state.isActionClicked == false) {
      this.showActionContent();
    }
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
      showProfile: true,
      showPersonWrapper: true,
      showRow8Person1: true,
      showRedBackground: false,
      showActionButton: true,
      isDirectionActive: false,
    });

  }

  showRow3Person2 = () => {
    this.setState({
      showProfile: true,
      showPersonWrapper: true,
      showRow3Person2: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow1Person2 = () => {
    this.setState({

      showProfile: true,
      showPersonWrapper: true,
      showRow1Person2: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow1Person1 = () => {
    this.setState({
      showProfile: true,
      showPersonWrapper: true,
      showRow1Person1: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow6Person1 = () => {
    this.setState({

      showProfile: true,
      showPersonWrapper: true,
      showRow6Person1: true,
      showRedBackground: false,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow3Person1 = () => {
    this.setState({

      showProfile: true,
      showPersonWrapper: true,
      showRow3Person1: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow11Person1 = () => {
    this.setState({

      showProfile: true,
      showPersonWrapper: true,
      showRow11Person1: true,
      showRedBackground: true,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow8Person2 = () => {
    this.setState({
      showProfile: true,
      showPersonWrapper: true,
      showRow8Person2: true,
      showRedBackground: false,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showRow6Person2 = () => {
    this.setState({
      showProfile: true,
      showPersonWrapper: true,
      showRow6Person2: true,
      showRedBackground: false,
      showActionButton: true,
      isDirectionActive: false,
    });
  }

  showFlag = () => {
    this.setState({
      fadeInFlag: true,
      showPersonWrapper: false,
      showRow8Person1: false,
      showRow8Person2: false,
      showRow3Person2: false,
      showRow1Person1: false,
      showRow1Person2: false,
      showRow6Person1: false,
      showRow6Person2: false,
      showRow3Person1: false,
      showRow11Person1: false,
    });

    setTimeout(() => {
      this.setState({
        showProfile: false,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        fadeInFlag: false,
      });
    }, 1700);

    this.addCounter();
  }

  showActionContent = () => {
    this.setState ({
      showActionContent: !this.state.showActionContent,
      isActionClicked: true,
    });
  }

  showFAQContent = () => {
    this.setState ({
      showFAQContent: !this.state.showFAQContent,
    });
  }



render() {
  return (
    <div className = "Fourth-Wrapper">



    {this.state.showProfile ? (
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
            <p>Immigrated from Iran</p>
            <p>ICE Detention Center: Aurora Contract Detention Facility</p>

          </div>
          <div className = "Fourth-Story">
            <p>CONTENT WARNING: SUBSTANCE WITHDRAWAL</p>
            <p>Kamyar Samimi came to the United States as a student in 1976 and became a Legal Permanent Resident in 1978. In Colorado, he worked as a mechanic while raising three children.</p>
            <p>On November 17th, 2017, Kamyar was arrested at his home and accused of controlled substance violation.</p>
            <p>When entering the Aurora Contract Detention Facility (ACDF), Kamyar reported that he was taking between 150 - 190mg of methadone daily ― an opioid medication he had been taking for 20 years. He expressed he was beginning to experience methadone withdrawal symptoms. Nurses received orders from the physician to house Kamyar in medical observation, but the physician did not order monitoring of Kamyar’s withdrawal symptoms with any medical instruments.</p>
            <p>Kamyar remained in the medical unit for 16 days, and although his conditions indicated a need for withdrawal medication, nurses administered less than half the doses ordered. Additionally, the physician never physically examined Kamyar.</p>
            <p>Nursing notes and video surveillance footage revealed a severe deterioration in Kamyar’s health. Conditions included but were not limited to: tremors, nausea, vomiting, refusing meals, inability to sit upon a bed or in a wheelchair, and signs of dehydration. In interviews, nurses expressed they believed Kamyar was exaggerating his symptoms and did not see an urgent need to notify the physician.</p>
            <p>During the morning of December 2nd, as two officers and a nurse attempted to move Kamyar into a wheelchair, he began to seize. Over the next six minutes, the nurse made unsuccessful attempts to contact the physician, while the officers called their Lieutenant, who directed they call 911. Emergency Medical Services arrived on the scene, and Kamyar stopped breathing on the way to the Emergency Room (ER). The ER staff were unable to resuscitate Kamyar, and he was pronounced dead at 12:02 p.m.</p>
            <p>The ACDF is a for-profit detention center operated by GEO Group Inc. On November 12th, 2019, The family of Kamyar filed a lawsuit with the ACLU of Colorado against GEO Inc. for the wrongful death of Kamyar Samimi.</p>
            <p>Sources: <a target = "_blank" href = "https://bento.cdn.pbs.org/hostedbento-prod/filer_public/RMPBS%20PDFs/RMPBS%20News/2018-ICFO-47347.pdf"> Kamyar Samimi Death Report,</a> <a target = "_blank" href = "https://aclu-co.org/aclu-of-colorado-sues-geo-for-the-wrongful-death-of-kamyar-samimi/"> ACLU Sues GEO For Wrongful Death of Kamyar Samimi,</a> <a target = "_blank" href = "https://www.coloradoindependent.com/2019/08/15/geo-group-aurora-immigrant-detention-center/">GEO Group Aurora Immigration Center</a></p>

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
            <p>Immigrated from El Salvador</p>
            <p>ICE Detention Center: Otero County Processing Center</p>

          </div>
          <div className = "Fourth-Story">
          <p>CONTENT WARNING: TRANSPHOBIA, PHYSICAL ILLNESS</p>
            <p>Johana Medina Leon was a certified nurse in El Salvador. However, she was not able to practice because she was bravely living openly as a transgender woman. She immigrated to the United States seeking asylum, and legally entered through a port of entry.</p>
            <p>After entering on April 11th, 2019, through the U.S through Paso Del Norte Port of Entry in El Paso, New Mexico, Johana was transferred to the Otero County Processing Center, operated by a private prison company. Despite identifying as a woman at the port of entry, Johana was sent to an all-male facility.</p>
            <p>In the coming weeks, she became severely ill. Johana told the staff at the Otero County Processing Center she needed an IV solution. She explained she could do it herself, but just needed the medication. Johana asked for water, sugar, and salt so she could make her own IV; her requests were repeatedly denied.</p>
            <p>On May 18th, Johana finally received her credible fear interview and passed. She was ordered to appear before a judge on May 22nd ― the first step in the asylum process.</p>
            <p>However, on May 28th, Johana experienced severe chest pain and eventually became unconscious. She was transferred to Del Sol Medical Center in El Paso, Texas, and ICE released her from custody.</p>
            <p>Four days later, on June 1st, Johana passed away from pneumonia.</p>
            <p>After years of advocacy by immigrant rights advocates, ICE is required by Congress to report the death of any migrants in its custody within 30 days and release a final report to the public within 60 days. Because Johana was released from ICE custody the same day she was sent to the hospital, her death is not considered in-custody; a report was never released by ICE.</p>
            <p>Sources: <a target = "_blank" href = "https://www.themujerista.com/the-blog/transgender-woman-and-asylum-seeker-johana-medina-leon"> Transgender Woman and Asylum Seeker Johana Medina Leon,</a> <a target = "_blank" href = "https://rewire.news/article/2019/06/06/the-details-of-johana-medinas-detainment-and-death-matter/"> The Details of Johana Medina’s Detainment and Death Matter</a></p>
          </div>
          </div>
          </div> : null}

      {this.state.showRow1Person2 ?
        <div className = "Fourth-Person">
        <img className = "Fourth-Portrait" src = {MergensanaAmar}/>
        <div className = "Fourth-Writing">
          <p className = "Fourth-Title" >MERGENSANA AMAR</p>
          <div className = "Fourth-SubTitle">
            <p>40-year-old man</p>
            <p>Immigrated from Buryatia</p>
            <p>ICE Detention Center: Northwest Detention Center</p>

          </div>
          <div className = "Fourth-Story">
            <p>CONTENT WARNING: DEPRESSION, SUICIDE</p>
            <p>Mergensana Amar immigrated from Buryatia, a Russian republic in Siberia, just north of Mongolia. He arrived in the United States on December 5th, 2017. Seeking asylum, Mergensana presented himself at the San Ysidro Port of Entry in California to begin the asylum process.</p>
            <p>On December 19th, Mergensana was transferred to the Northwest Detention Center in Tacoma, Washington, and he stayed in this facility awaiting immigration proceedings for the following nine months.</p>
            <p>On August 22nd, 2018 ― Mergensana began a hunger strike, one of the few ways people in detention can bravely protest their incarceration. During a medical examination, he explained he had “no intentions of eating” and that he would be protesting the length of time it took for the immigration courts to make a decision about his case.</p>
            <p>After missing nine consecutive meals, Mergensana was admitted to the medical housing unit (MHU) per ICE’s hunger strike protocol. According to the mental status exam, Mergensana’s mental status was stable; he appeared goal-oriented and showed no signs of hallucinations. While he complained of body pain, he refused all pain medication and laboratory tests.</p>
            <p>Mergensana later disclosed to a reporter that when he had refused laboratory tests, “heavily armored people, with helmets and shields, came and surrounded him.” They told him if he did not resume eating voluntarily, they would begin force-feeding him through a tube.</p>
            <p>Following these threats by ICE, Mergensana began to eat on October 16th.  Ten days later, he was returned to the MHU after staff found a “long hand-made rope made of bedding” hidden in his cell ― a possible suicidal gesture.</p>
            <p>From November 1st to the 4th, Mergensana refused to engage with behavioral staff, with notes describing Mergensana “hiding” or pulling the blanket over his head. The behavioral health provider considered Mergensana a “low-risk” for suicide.</p>
            <p>On November 11th, a CO had documented that Mergensana had missed a total of 46 meals since the beginning of his hunger strike.</p>
            <p>The next day, Mergensana began eating 100 percent of his meals and requested to return to the general population. He was returned to the general population.</p>
            <p>Three days later, on November 15th, Mergensana hung himself from a self-made ligature around his neck. He was transported to the local hospital and admitted to the intensive care unit (ICU) for an anoxic brain injury; tests conducted in the ICU later confirmed brain death.</p>
            <p>On November 24th, 2018, the hospital removed Mergensana from life support. He passed away at 6:05 p.m.</p>
            <p>In previous conversations with reporters, Mergensana expressed how he feared to return to Russia. There, Russian skinheads had beaten and threatened him. Moreover, he described having been imprisoned for demonstrating for the independence of Buryatia, which has been under Russian rule since the 17th century.</p>
            <p>Sources:
            <a target = "_blank" href = "https://www.ice.gov/doclib/foia/reports/ddrAmarMergensana.pdf"> Mergensana Amar Death Report,</a>
            <a target = "_blank" href = "https://crosscut.com/2018/11/ice-says-asylum-seeker-life-support"> Asylum Seeker is on Life Support, </a>
            <a target = "_blank" href = "https://crosscut.com/2019/06/asylum-seeker-vowed-never-return-russia-his-death-ice-custody-sent-him-back"> Asylum Seeker Vowed to Never Return to Russia</a>
            </p>
          </div>
          </div>
          </div> : null}

          {this.state.showRow1Person1 ?
            <div className = "Fourth-Person">
            <img className = "Fourth-Portrait" src = {JeanJimenezJoseph}/>
            <div className = "Fourth-Writing">
              <p className = "Fourth-Title" >JEAN JIMENEZ-JOSEPH</p>
              <div className = "Fourth-SubTitle">
                <p>27-year-old man</p>
                <p>Immigrated from Panama</p>
                <p>ICE Detention Center: Stewart Detention Center</p>
              </div>
              <div className = "Fourth-Story">
                <p>CONTENT WARNING: SCHIZOPHRENIA, PHYSICAL ASSAULT, SUICIDE</p>
                <p>Jean Jimenez-Joseph and his family immigrated from Panama when he was 10 years-old.  After submitting four applications, Jean was finally approved for Deferred Action for Childhood Arrival (DACA) on May 6th, 2016, and he enrolled in community college to study architecture.</p>
                <p>Five months later, Jean suffered a head injury while skateboarding. Following this incident, Jean experienced severe psychological distress, and was diagnosed with schizophrenia and anxiety. He was hospitalized for mental health treatment multiple times.</p>
                <p>Within these months, around October 2016, Jean’s DACA status was removed after a misdemeanor offense. However, since Jean was not an “enforcement priority,” he was not given an order of detention and deportation. However, after Trump’s executive order in January of 2017 ― which made all undocumented immigrants targets for deportation ― Jean was arrested and eventually transported to the Stewart Detention Center (SDC) in Lumpkin, Georgia on March 7th, 2017.</p>
                <p>When Jean was assessed by a SDC officer, he responded “yes,” to a question concerning thoughts of harming himself or others; the officer notified a nurse. With the nurse, Jean described two past suicide attempts and a history of visual hallucinations. After being seen by a licensed clinical social worker, he was prescribed psychotropic medication, but there are no records to show the nurse gave Jean the medication. Jean remained in medical observation for two days.</p>
                <p>When releasing Jean to the general population, medical staff completed a special needs form requesting Jean to be housed on a low bunk on a low tier. Despite this, security staff assigned him to an upper bunk.</p>
                <p>On April 13th, 2017, Jean was physically assaulted by another person in detention. SDC Housing Unit Post Orders states no officer should leave their post unless they are replaced by another officer/manager/supervisor, yet video footage later revealed no officers were present at the time of the assault.</p>
                <p>Though Jean explained he did not start or physically engage in the fight, SDC staff sent him to solitary confinement for several days, a practice internationally recognized as torture.</p>
                <p>Jean returned to the general population, and he immediately called ICE’s help line. Jean said he was hearing voices telling him to commit suicide. Two days after this call, on April 27th,  the officer assigned to Jean’s unit left his post unsupervised. Jean walked out of his unit and climbed over the railing of the second tier. He jumped nine feet onto the first floor and landed on his feet. Concerned, another person in detentiondetainee informed the officer what Jean had done upon returning. The officer charged Jean with an act that could endanger persons or property, and he was sentenced to twenty additional days in solitary confinement.</p>
                <p>Throughout these days, reports show a worsening in Jean’s mental health. Observations included an increase of auditory hallucinations, inappropriate laughing/yelling, kicking the air around him as well as pounding on walls. During this time, Jean also admitted to medical staff that his previous jumping act was a suicide attempt.</p>
                <p>Despite all this information, SDC staff kept Jean in solitary confinement. On May 15th, 2017, after 18 days in solitary confinement, Jean was found hanging in his cell by a sheet, and he was pronounced dead by Emergency Medical Services at 2:15am.</p>
                <p>Juan Méndez, a professor of human rights law who previously served as the United Nations special rapporteur on torture, explains that solitary confinement is a torture practice: “Even for a single day, it is banned [in international law] when applied to inmates with psycho-social disabilities...”</p>
                <p>Sources:
                <a target = "_blank" href = "https://drive.google.com/file/d/1Xzn17gbi8wiN0O3tyBIxx-XlMcyUQUYN/view"> Jean Jimenez Joseph Death Report,</a>
                <a target = "_blank" href = "https://www.americanimmigrationcouncil.org/research/immigration-enforcement-priorities-under-trump-administration"> Trump’s 2017 Executive Order,</a>
                <a target = "_blank" href = "https://theintercept.com/2018/10/08/ice-detention-suicide-solitary-confinement/"> Immigrant Called ICE Help Line</a>
                </p>
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
                <p>Immigrated from Cameroon</p>
                <p>ICE Detention Center: Otay Mesa Detention Center</p>
              </div>
              <div className = "Fourth-Story">
              <p>CONTENT WARNING: HATE CRIME, PHYSICAL ILLNESS</p>
                <p>Nebane Abienwi was a father of three fleeing civil war conflicts in Cameroon. After traveling across three continents and nine countries, Nebane finally reached the United States and applied for asylum on September 5th, 2019 at the San Ysidro Port of Entry in California.</p>
                <p>U.S. Customs and Border Protection officers detained Nebane at the San Ysidro Admissibility Enforcement Unit, and he was later transferred to the Otay Mesa Detention Center ― operated by a private prison company ― on September 19th while he awaited the next step of the asylum process.</p>
                <p>During his medical examination, Nebane reported a three-day hospitalization in Mexico only three weeks ago for severe hypertension.</p>
                <p>On September 26th, Nebane allegedly fell off his top bunk onto the floor. A registered nurse observed him confused, sweating, not responding to commands, and paralyzed from the left side. He was taken to Sharp Chula Vista Medical Center and admitted to the intensive care unit. There, he was diagnosed with acute severe right intraparenchymal hemorrhage (bleeding within the brain).</p>
                <p>On October 1st, 2019, the hospital declared Nebane brain-dead and contacted his family. His family requested Nebane be kept on life support until a family member could arrive at the hospital. Despite the family’s wishes, the hospital removed Nebane from the ventilator at 2:37 p.m.</p>
                <p>In a later interview, Dr. John Flack, hypertension specialist and Chair of the Department of Internal Medicine at Southern Illinois University, expressed Nebane was likely a victim of medical negligence, expressing it was inconceivable he was allowed to enter the detention facility after having recently been hospitalized.</p>
                <p>Moreover, past cases reveal Otay Mesa Detention Center has a history of abuse and violence, particularly toward specific ethnic groups that include Cameroonians.</p>
                <p>Sources:
                <a target = "_blank" href = "https://www.ice.gov/doclib/foia/reports/ddrAbienwiNebane.pdf"> Nebaine Abienwi Death Report,</a>
                <a target = "_blank" href="https://www.thenation.com/article/world/ice-death-negligence/"> How Medical Negligence at the US Border Killed an Immigrant Father,</a>
                <a target = "_blank" href = "https://www.latimes.com/california/story/2019-10-05/cameroon-death-ice-custody-black-immigrants-rights"> Black Immigrant Rights Organizations Condemn the Death of Cameroonian in ICE custody</a>
                </p>
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
                  <p>Immigrated from Guatemala</p>
                  <p>ICE Detention Centers: El Valle Detention Facility and Kay County Detention Center</p>
                </div>
                <div className = "Fourth-Story">
                  <p>CONTENT WARNING: SEXUAL ASSAULT, PTSD, PHYSICAL ILLNESS</p>
                  <p>On September 5, 2019, Maria Celeste Ochoa Yoc de Ramirez was apprehended by U.S. Border Patrol in the Rio Grande Valley, Texas. She was first transferred to El Valle Detention Facility in Raymondville, Texas.</p>
                  <p>On September 6th, 2019, a registered nurse performed a medical screening. Maria did not report any health conditions, except an allergy to the antibiotic gentamycin.</p>
                  <p>About a week later, Maria disclosed that she had been suffering from post-traumatic stress disorder (PTSD) from a history of sexual assault. She described having disruptive nightmares and resorted to excessive sleep during the day to cope. Moreover, the mental examiner noted Maria’s tearful and sad mood. She was prescribed Terazosin, a drug often used to reduce sleep-related disorders in PTSD. Over the next four months, Maria was not evaluated for any progress on her PTSD symptoms.</p>
                  <p>On February 2nd,  2020, Maria was examined for vomiting, weight loss, and muscle aches by a licensed vocational nurse (LVN). According to the LVN, her vital signs appeared normal, except with an abnormal pulse and a loss of 14 pounds since November 20th. The LVN documented the exam as normal.</p>
                  <p>The next day, a registered nurse (RN) saw Maria for complaints of shortness of breath and nausea. Her vital signs were allegedly normal, except with an abnormal pulse and diminished right lung sounds. The RN referred Maria to a medical provider for an x-ray, which returned negative.</p>
                  <p>On February 5th, people in detention reported to the security staff that they had witnessed Maria self-induce vomiting after her meals. The following day, an RN assessed Maria for anxiety and poor sleep. Maria described “feeling as though her heart was stopping and she was dying.” Meanwhile, the security staff discovered several pills under Maria’s mattress.</p>
                  <p>After receiving alarming laboratory results, she was sent to the Alliance Health Ponca City emergency department in Ponca City, OK, where she was diagnosed with cholecystitis (inflammation of the gallbladder) and acute biliary pancreatitis (inflammation of the pancreas).
                  After having her gallbladder removed, she was sent to Kay County Detention Center (KCDC). She continued to have several health problems throughout her stay at KCDC including weakness, nausea, and abdominal pain. </p>
                  <p>On February 18th, Maria was referred to Texas Health Huguley Hospital for further laboratory tests. There, a CT scan and chest x-rays showed: possible pancreatitis; an enlarged, inflamed liver with fibrosis (scarring); abnormal uterine appendages (which could relate to an ovarian cyst); bilateral atelectasis (partial collapse of the lung) with trace left pleural effusion (buildup of fluid); atypical pneumonitis (inflammation of the lungs); and bilateral alveolar disease (affects the alveoli of the lungs).</p>
                  <p>After being treated, Maria’s condition improved. However, on March 5th, she had difficulty breathing and was transferred to the intensive care unit. She experienced a seizure, and after being resuscitated, was put on a ventilator. In the following days, her condition worsened.</p>
                  <p>On March 8th, Maria experienced cardiac arrest three times. Health providers were unable to resuscitate her, and she passed away at 8:45 a.m.</p>
                  <p>Rafael Ochoa, Maria’s brother, has expressed in interviews that before immigrating from Guatemala, his sister did not ever suffer from any chronic diseases. His sister, he described, was full of life at only 22 years old.</p>
                  <p>Sources:
                  <a target = "_blank" href = "https://www.ice.gov/doclib/foia/reports/ddrOCHOAYocDeRamirezMariaCeleste.pdf"> Maria Celeste Ochoa Yoc De Ramirez Death Report,</a>
                  <a target = "_blank" href = "https://www.dallasnews.com/news/2020/03/10/guatemalan-asylum-seeker-dies-in-ice-custody-in-fort-worth-hospital/"> Guatemalan Asylum Seeker Dies in ICE Custody</a>
                  </p>
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
                  <p>Immigrated from Mexico</p>
                  <p>ICE Detention Center: Stewart Detention Center</p>
                </div>
                <div className = "Fourth-Story">
                  <p>CONTENT WARNING: SCHIZOPHRENIA, SUICIDE</p>
                  <p>Efrain had been living in the United States for 17 years before he was apprehended by Immigrations Customs Enforcement (ICE) while on his way back to Mexico. He was transferred to the Stewart Detention Center (SDC) in Lumpkin, Georgia, managed by the for-profit prison company CoreCivic Inc.</p>
                  <p>Upon arriving at the SDC on March 13th, 2018, Efrain reported to the registered nurse (RN) that he dealt with schizophrenia. Though he described having some auditory hallucinations in the past, Efrain reported feeling well overall and denied having any suicidal thoughts. Moreover, a mental health evaluation conducted later that week by a psychologist found Efrain to be mentally stable.</p>
                  <p>From April 3rd to April 18th, Efrain was placed in solitary confinement, a practice internationally recognized as torture.</p>
                  <p>On April 24th, Efrain described having auditory hallucinations. He explained to the advanced practice provider (APP) that he would be dead in three days and that he felt he was a danger to himself and others. Following this, the APP placed him on suicide watch in the medical housing unit (MHU).</p>
                  <p>Over the next six days, Efrain’s status did not improve; he continued describing auditory and visual hallucinations. The staff felt he was unable to progress in the current environment, so they transferred him to the Columbia Regional Care Center (CRCC).</p>
                  <p>Efrain spent a little over a month at the care center, and his health improved. When returning to the SDC on June 12th, Efrain reported that he was taking medication.</p>
                  <p>On June 20th, an LCSW evaluated Efrain and recorded his limitation in mental functioning, his refusal of medication administration, and the potential of his behavior worsening. Between June 20th and July 10th, Efrain remained in solitary confinement.</p>
                  <p>On the last day of this period, an RN who evaluated Efrain described that he was answering questions appropriately and that he denied any suicidal ideas. On the same day, Efrain expressed to an LCSW that he was going to die and did not want to continue taking medication. The LCSW documented that Efrain would benefit from a referral to a mental health facility with a higher level of care.</p>
                  <p>Later that night, custody officers called a medical emergency  ―  an officer found Efrain unresponsive, hanging from the railing of his upper bunk. At 11:39 p.m., Efrain passed away.</p>
                  <p>The Intercept accessed hundreds of pages of records, photos, audio with witnesses and correctional staff, and 18 hours of security footage from within the facility. Evidence shows the facility did not check on Efrain for two hours before he died by suicide.</p>
                  <p>Sources:
                  <a target = "_blank" href = "https://www.ice.gov/doclib/foia/reports/ddrDeLaRosaEfrainRomero.pdf"> Efrain De La Rosa Death Report,</a>
                  <a target = "_blank" href = "https://theintercept.com/2019/08/29/ice-solitary-mental-health-corecivic/"> How Solitary Confinement Kills</a>
                  </p>
                </div>
                </div>
                </div> : null}

          {this.state.showRow8Person2 ?
            <div className = "Fourth-Person">
            <img className = "Fourth-Portrait" src = {CarlosVasquez}/>
            <div className = "Fourth-Writing">
              <p className = "Fourth-Title" >CARLOS GREGORIO HERNANDEZ VASQUEZ</p>
              <div className = "Fourth-SubTitle">
                <p>16-year-old boy</p>
                <p>Immigrated from Guatemala</p>
                <p>CBP Detention Center: Rio Grande Valley Sector’s Central Processing Center</p>
              </div>
              <div className = "Fourth-Story">
                <p>CONTENT WARNING: NEGLECT, PHYSICAL ILLNESS</p>
                <p>U.S. Border Patrol agents apprehended Carlos on May 13th, 2019, near Hidalgo, Texas.</p>
                <p>For six days, he was held at the Rio Grande Valley Sector’s Central Processing Center. Customs and Border Protection (CBP) processing centers are meant to serve as brief detention stays, after which immigrants are turned over to Immigration and Customs Enforcement (ICE), or in the case of children, the Office of Refugee Resettlement (ORR) ― unfortunately this is not often the case.  On his last day at the CBP facility, Carlos tested positive for the flu and had a fever of 103 degrees. Despite these symptoms, he was transferred from the Rio Grande Valley Sector’s Central Processing Center to the Weslaco Border Patrol Station.</p>
                <p>Upon arriving at the station, Carlos was placed in a holding cell with another physically-ill man. The next morning, on May 20th, Carlos was found dead in the holding cell.</p>
                <p>Before his death, an agent logged checking on Carlos three times throughout the morning; they did not report anything alarming about Carlos’ condition. However, video later obtained by ProPublica shows that during this time, Carlos was in severe pain ― writhing on the floor and eventually becoming unconscious. Moreover, agents reported finding Carlos unresponsive after checking in on him. In the video, however, Carlos’s cellmate is who first noticed Carlos in an unresponsive state, after which he immediately signals for help.</p>
                <p>United States laws require U.S. Customs and Border Patrol to transfer minors into the custody of the ORR within <a target="_blank" href = "https://www.texasmonthly.com/news/autopsy-details-death-guatemalan-migrant-child/">72</a> hours of detainment. Carlos, however, spent seven days at two different detention centers. Medical experts have also noted that Carlos should have been initially sent to a hospital considering his severe flu symptoms.</p>
                <p>Sources:
                <a target = "_blank" href = "https://www.propublica.org/article/inside-the-cell-where-a-sick-16-year-old-boy-died-in-border-patrol-care"> Inside the Cell Where a Sick Boy Died in Border Patrol Care,</a>
                <a target="_blank" href = "https://www.texasmonthly.com/news/autopsy-details-death-guatemalan-migrant-child/"> Autopsy Details of Guatemalan Migrant Child</a>
                </p>
              </div>
              </div>
              </div> : null}

        {this.state.showRow6Person2 ?
          <div className = "Fourth-Person">
          <img className = "Fourth-Portrait" src = {MarieeJuarez}/>
          <div className = "Fourth-Writing">
            <p className = "Fourth-Title" >MARIEE JUAREZ</p>
            <div className = "Fourth-SubTitle">
              <p>2 ½-year-old girl</p>
              <p>Immigrated from Guatemala</p>
              <p>ICE Detention Center: South Texas Family Residential Center</p>
            </div>
            <div className = "Fourth-Story">
              <p>CONTENT WARNING: PHYSICAL ILLNESS</p>
              <p>Yazmin Juárez, a 20-year-old woman, and her daughter, Mariee, were apprehended by Rio Grande, a river that marks the boundary between Mexico and the United States. A few days after, on March 5th, 2018, they were transferred to the South Texas Family Residential Center (STFR), one of three family detention centers. Upon being detained  at the facility, Mariee had no health issues.</p>
              <p>However, after about one week at the detention center, Mariee’s health deteriorated. She had a cough, congestion, and a fever of 104 degrees. On March 11th, Yazmin took Mariee to the clinic. After waiting hours, she was told Mariee had a respiratory infection; Mariee was given Tylenol and honey. The next day, Mariee’s illness worsened. Yazmin once again sought medical attention, and the providers said they believed Mariee had an ear infection; they prescribed her antibiotics. During a testimonial, Yazmin describes having to wait in line for hours before being seen by a medical professional. She was even turned away on two occasions.</p>
              <p>Yazmin and Mariee passed their credible fear interview and were released from Immigration Customs Enforcement custody on March 25th.</p>
              <p>Yazmin took Mariee to the hospital the following day, and within hours, she was transferred to the emergency room for a viral lung infection. For the next six weeks, Mariee was hospitalized at three hospitals. She was released from a ventilator and passed away at Children’s Hospital of Philadelphia on May 10th.</p>
              <p>Crowded conditions at detention centers allow viruses to spread easily. Coupled with the lack of adequate medical care, people in detention ― especially young children ― have a more difficult time recovering.  Following the death, Yazmin filed a wrongful death claim against the U.S. government.</p>
              <p>Sources:
              <a target = "_blank" href = "https://news.vice.com/en_us/article/paw9ky/toddler-died-after-getting-sick-in-ice-custody"> Toddler Died After Getting Sick in ICE Detention,</a>
              <a target = "_blank" href = "https://www.nbcnews.com/news/latino/migrant-mom-details-daughter-s-death-after-ice-detention-emotional-n1028471"> Migrant Mom Details Daughter’s Death,</a>
              <a target = "_blank" href = "https://www.nbcnews.com/news/latino/guatemalan-mom-says-inadequate-medical-care-ice-custody-led-toddler-n904756"> Inadequate Medical Care in ICE Custody</a>
              </p>
            </div>
            </div>
            </div> : null}

      </div>
      </div>



    )
    :
    (
      <div className = {this.state.fadeInFlag ? 'fadeIn' : null}>
      <div className = "Fourth-WrapperFlag">
      {this.state.showActionButton ?
        <div className = "Fourth-ActionDiv"><button onClick={this.showActionContent.bind(this)} className = "Fourth-Action">TAKE ACTION</button></div>  : null}
      {this.state.showActionButton ? <button className = "Fourth-FAQButton" onClick={this.showFAQContent.bind(this)}>?</button> : null}
        {this.state.isDirectionActive ?
          <div className = "Fourth-DirectionDiv"><p className = "Fourth-Direction">Immigration detention is plagued by fatally flawed medical care, a lack of transparency, and ongoing abuse. These stories illuminate only a few of the many tragedies that have occurred inside ICE and CBP custody. To view a story, click on a blinking figure.</p></div>
          : null}
      <img className = "Fourth-Texture" src = {FourthTexture}/>
      <img className = "Fourth-People" src = {FourthPeople}/>
      <img className= "Fourth-FlagLarge" src = {FourthFlagLarge}/>
      <img className= "Fourth-FlagSmall" src = {FourthFlagSmall}/>
      <div className = 'Fourth-Background'></div>

      <div className = "Fourth-SilhouettesDiv">
      <div className = "Fourth-Silhouettes">

      <img className = "Fourth-Row8Person1" src = {Row8Person1}
          onClick={this.showRow8Person1.bind(this)}/>
      <img className = "Fourth-Row8Person1-Red" src = {Row8Person1Red}/>

      <img className = "Fourth-Row3Person2" src = {Row3Person2}
          onClick={this.showRow3Person2.bind(this)}/>
      <img className = "Fourth-Row3Person2-Red" src = {Row3Person2Red}/>

      <img className = "Fourth-Row1Person2" src = {Row1Person2}
          onClick={this.showRow1Person2.bind(this)}/>
      <img className = "Fourth-Row1Person2-Red" src = {Row1Person2Red}/>

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

      <img className = "Fourth-Row8Person2" src = {Row8Person2}
          onClick={this.showRow8Person2.bind(this)}/>
      <img className = "Fourth-Row8Person2-Red" src = {Row8Person2Red}/>

      <img className = "Fourth-Row6Person2" src = {Row6Person2}
          onClick={this.showRow6Person2.bind(this)}/>
      <img className = "Fourth-Row6Person2-Red" src = {Row6Person2Red}/>

      </div>
      </div>

      <button onClick={this.handleButtonClick.bind(this)} className = {this.state.isSceneActive ? "Fourth-Home-FadeIn" : "Fourth-Home-FadeOut"}>HOME</button>


      {this.state.showActionContent ?
        <div onClick={this.showActionContent.bind(this)} className = "Fourth-ActionContent">
      <p>This project was made with the support of <a href = "https://www.detentionwatchnetwork.org/" target = "_blank"> Detention Watch Network, </a> a national coalition dedicated to abolishing immigration detention in the United States. Can you spare at least $5 to help strengthen their work and contribute to the mission of ending immigration detention?</p>
      <a target = "_blank" href ="https://detentionwatchnetwork.z2systems.com/np/clients/detentionwatchnetwork/donation.jsp?campaign=25&&test=true"><button>YES! I CAN HELP</button></a>
      <p className = "Fourth-SubCaption">To stay informed and learn of other ways to contribute, follow Detention Watch Network on <a target = "_blank" href = "https://twitter.com/DetentionWatch">Twitter</a> and <a target = "_blank" href = "https://www.facebook.com/DetentionWatchNetwork">Facebook.</a></p>
      </div> : null}

      {this.state.showFAQContent ?
        <div onClick={this.showFAQContent.bind(this)} className = "Fourth-FAQContent">
        <p>IMMIGRATION DETENTION</p>
        <p>Frequently Asked Questions</p>
        <p>To learn more about immigration detention and what you can do to end it, visit <a href = "https://www.detentionwatchnetwork.org/" target = "_blank">detentionwatchnetwork.org</a></p>
        <p>What is immigration detention?</p>
          <p>Immigration detention is the unjust and inhumane practice of incarcerating immigrants while they await a determination of their immigration status or potential deportation. In Fiscal Year (FY) 2019, the United States government detained over 500,000 people in a sprawling system of over 200 jails across the country run by Immigration and Customs Enforcement (ICE).</p>
          <p>ICE has an appalling record of abuse. Many Americans are shocked to learn that in ICE detention centers people are deprived of their liberty, denied access to lawyers, separated from their families and loved ones, and experiencing fatal medical neglect. Since 2003, over 200 people have died in ICE custody.</p>
        <p>Who is in immigration detention?</p>
          <p>Immigrants in detention can be undocumented or documented immigrants, including people whose immigration status is not current, is expired, or is under review. The U.S. locks up survivors of torture, people seeking asylum, people who have been granted the right to live in the U.S., visa holders, people who have lived here for years and may have American citizen spouses and children, individuals with mental health and medical conditions and other vulnerable groups including pregnant women and families with children — even babies.</p>
        <p>What is ICE’s budget?</p>
          <p>In the last two years, taxpayers have spent approximately $8 billion annually on Immigration Customs Enforcement (ICE) (FY20: $8.4 billion). Since 2016, ICE’s budget has seen about a 40 percent increase under the Trump administration. This money translates into the detention of immigrants, racial profiling and targeting of immigrant communities, and separation of families and loved ones.
          Instead, taxpayer dollars should be used to support our collective well-being for programs like education, housing, and healthcare to build thriving communities.
          </p>
        <p>Who profits from immigration detention?</p>
          <p>ICE contracts with both local governments and private prison companies, like The GEO Group, Inc. and CoreCivic, to operate its wide network of facilities that includes dedicated detention centers as well as local and state jails. This contract model creates a perverse financial incentive to keep people incarcerated as private prison companies and local governments with shrinking budgets profit off of immigrant pain.</p>
          <p>Over 80 percent of people held in detention facilities are operated by private prison companies.</p>
        <p>Does the U.S. need immigration detention?</p>
          <p>Simply put, no. As the U.S. expanded prisons in the 1980s and 1990s, the detention of immigrants, once a little known practice, began to take shape and grow to the system we have today. It doesn’t need to be this way.</p>
          <p>People navigating their immigration case should be able to do so with their loved ones and in their communities not behind bars in immigration detention. The majority of people in detention have been living in the U.S. for years and are established members of their communities with families. People seeking asylum often have strong community ties with loved ones waiting to welcome them to the United States. And for those that need support, they can access it through community-based groups that offer services to help people through their immigration proceedings.</p>
        </div> : null}
      </div>
      </div>

    )
    }

    </div>
  );
}
}
