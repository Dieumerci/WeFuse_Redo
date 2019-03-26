import React from 'react'
import Tilt from 'react-tilt';

import 'animate.css/animate.css';  // you need to require the css somewhere
import ScrollAnimation from 'react-animate-on-scroll';
const imgMint = require('../../assets/radio.png');

const styles = {
	conStyle: {
    // width: '200px',
    height: '400px',
    // marginLeft: '-400px'


  },

  imgStyle: {
    marginTop: '-7px',
    marginRight: '-100px',
    width: '400px',
    height: '400px',
  }
  , h4StyleNew:{
    fontFamily: "Times New Roman",
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize:'2.28vw',
  }
  , h4StyleNews:{
    fontFamily: "Times New Roman",
    
    color: '#fff',
    textAlign: 'left',
    fontSize:'1.28vw',
  }
}

var options = {
	movement: {
		imgWrapper : {
			translation : {x: 10, y: 10, z: 30},
			rotation : {x: 0, y: -10, z: 0},
			reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
		},
		lines : {
			translation : {x: 10, y: 10, z: [0,70]},
			rotation : {x: 0, y: 0, z: -2},
			reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
		},
		caption : {
			rotation : {x: 0, y: 0, z: 2},
			reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
		},
		overlay : {
			translation : {x: 10, y: -10, z: 0},
			rotation : {x: 0, y: 0, z: 2},
			reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
		},
		shine : {
			translation : {x: 100, y: 100, z: 0},
			reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
		}
	}
}
function FooterComponent() {
  
  return (
    
 
      <div id="main" data-anijs="if: mouseover, on: body, do: swing animated">

    
        <footer class="page-footer " >
          <div class="container" style={styles.conStyle}>
            <div class="row">
              <div class="col l6 s12">
              <ScrollAnimation animateIn='flipInY'
                             animateOut='flipOutY' >

                <h5 class="white-text shake shake-little" style={styles.h4StyleNew}>Thank You Werner and to the WeFuse Team.</h5>
                <p class="grey-text text-lighten-4" style={styles.h4StyleNews}>
I would like to thank you guy's, I really did learn a lot. I never thought UI design could be this fun. I still have a long way too go, but thats for giving me a second chance. <i class="fa fa-chain-broken" aria-hidden="true"></i></p>
                </ScrollAnimation>
              </div>
              <div class="col l4 offset-l2 s12">
              
              
              <Tilt className="Tilt" options={ options.movement} >
                <div><img src={imgMint} style={styles.imgStyle} class="animated FadeInLeft slower hvr-shutter-in-horizontal shake shake-crazy"/></div></Tilt>
              </div>
              
            </div>
           
          </div>
          <br></br>
        </footer>
        

        <br></br></div>

  )
}
export default  FooterComponent;