import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import posed from 'react-pose';
import FooterComponent from '../footer/footer';
import { bounce, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ScrollAnimation from 'react-animate-on-scroll';
import MakeSomethingMove from './extended/make_something_move';
const thumbsUp = require('../../assets/ThumbsUp.png');



const styles = {
	imgStyle: {
		width: '400px',
    height: '300px',
    marginTop: '-30px',
    marginLeft: '-150px'
  },

  h3Styles:{
    marginTop: '-290px',
    marginRight: '-900px'
  },

  pStyles:{
    marginTop: '-230px',
    marginLeft: '-530px',
    fontFamily: "Times New Roman",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:'2.12vw',
  },

  btnStyle: {
    marginTop: '-500px',
    background: '#99629E',
    borderRadius: '4%',
    fontFamily: "Times New Roman",
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '-60px',
  
  
   
    fontSize:'1.18vw',
    
  },
  
  mainStyle : {
    background: '#82A2A4',
  
  },
	containerStyle: {
    background: '#5F9E9D',
    marginTop: '-160px',
    width: '1200px',
		height: '300px',
  },
  containerStyleFooter:{
    width: '1200px',
    paddingTop: '30px',
    paddingBottom: '30px'
    // marginLeft:'-400px'
  },
  containerStyleNew:{
    background: '#382970',
    marginTop: '150px'
    // width: '2000px',
  },

  moveMeBack:{
    marginTop: '-450px'
  }

};

const Box = posed.div({
  hoverable: true,
  pressable: true,
  draggable: true,
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 },
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const BoxContext = posed.div({
  hoverable: true,
  pressable: true,
  draggable: true,
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 },
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  transition: {
    type: 'spring',
    round: true,
    stiffness: 100 
  },
  hover: {
    scale: 1.4,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.2,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const BoxDataum = posed.div({
  hoverable: true,
  pressable: true,
  draggable: true,
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 },
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  transition: {
    type: 'physics',
    delay: 400
  },
  hover: {
    scale: 1.3,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 0.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

class Third_page extends Component {
  render(){
  return (


    
    <div className="container hoverCon section3 " style={styles.containerStyle}>
    
    <ScrollAnimation
        animateIn="Flip"
        animationName="Bounce"
        autoplay="true"
        animateOut="zoomInUp"
        initiallyVisible={true}>
    <StyleRoot>
        <div data-anijs="if: click, do: flipInY, to: .container-box" class="row" style={styles.bounce} >
        <Box  >
            <div className="col lg1 " ><img src={thumbsUp} style={styles.imgStyle} /></div></Box>
            <div className="col lg6 ">
            <BoxContext  >
            <a className=" btn" style={styles.btnStyle}>HERE’S WHAT YOU’RE GONNA DO</a>
            </BoxContext>
            <div  className="row "><BoxDataum>
            <div class="col s6 "></div><div class="col s6 "><p style={styles.pStyles}>Let’s move things! Drag ME</p> <p style={{marginLeft:'-200px', fontWeight: 300, fontSize: '1.62vw', textAlign: 'left'}}>When the cursor enters this section,all images need to make subtle movements that mimic the direction of the cursor</p></div></BoxDataum></div>
            
            
            
            </div>

            
        </div>
        <div style={styles.moveMeBack}><MakeSomethingMove style={styles.moveMeBack}/></div>
    </StyleRoot>
    </ScrollAnimation>
    
    <br></br>
    <br></br>
    </div>
   
    

  )}
}


export default  Third_page;