import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import '../styles/first_page_style.css';
import { FadeInRight, FadeInLeft } from "animate-components";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
const imgPurple = require('../../assets/FloppyPurple.png');
const imgMint = require('../../assets/FloppyMint.png');


const styles = {
	imgStyle: {
		width: '200px',
    height: '200px',
    marginTop: '80px'
  },
  
  mainStyle : {
    background: '#38a9e4'
  },
	containerStyleSection2: {
    background: '#382970',
    width: '2000px',
    paddingTop:'50px',
		height: '400px',
	},

	forTextFontP1:{
		fontFamily: "Times New Roman",
		fontSize:'1.2vw',
		textAlign:'center',
	},

	forTextFontP:{
		fontFamily: "Times New Roman",
		fontSize:'1.4vw',
		textAlign:'center',
	},

	todoAnimation : {
		// width: '500px'
  },
  
  pStyleNewMe:{
    fontFamily: "Times New Roman",
    textAlign: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:'90'

  },
  pStyleNewMes:{
    fontWeight: 'normal',
    fontSize: '18px',
    textAlign: 'left'
  },
	imgMEStyle: {
		width: '200px',
    height: '200px',
    marginTop: '60px',
		postion: 'fixed',
		bottom: '0',
		right: '0',
	},
};


class Second_Page extends Component {
  state = {
    rotate: 0
   }
   enter(){
     this.setState({rotate: 180})
   }
   leave(){
     this.setState({rotate: 0})
   }
  render(){
  return (
    
    <div className={'section2'}>
    
    <br></br>
    <br></br>


    <div class="row z-depth-3" style={styles.containerStyleSection2}>
    <div class="container z-depth-3">

      <div class="col s6 "><FadeInLeft duration="2.8s" delay="0.2s" playState="running"><ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'><img src={imgPurple} style={styles.imgStyle} class="animated infinite FadeInLeft slower " /><img src={imgMint} style={styles.imgStyle} class="animated  FadeInLeft fast" /></ScrollAnimation></FadeInLeft></div>
      <div class="col s6" style={{ marginTop: '50px', marginLeft:'-50px'}}><FadeInRight infinite duration="2s"><ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutLeft'><h3 style={styles.pStyleNewMe} class="animated infinite FadeInLeft fast  FadeInRight slower animation-iteration-count: infinite;">Ok, here’s the deal...</h3><p style={styles.pStyleNewMes}>For this section the text needs to fadein from the right and the images from the left.</p></ScrollAnimation></FadeInRight><a class="waves-effect waves-light btn-small" style={{  marginLeft:'-500px'}}> I AM A BUTTON</a></div>
      </div>
      
    </div>
    
    </div>
  );}
}

export default Second_Page;