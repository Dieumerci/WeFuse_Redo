import React from 'react';
import Tilt from 'react-tilt';

const megaPhone = require('../../../assets/Megaphone.png');
const cloudImg = require('../../../assets/Cloud.png');



const styles = {
    containerStyle :{
        background: '#5F9E9D',
      
        text: 'center',
        width: '35%',
        height: '250px',
        paddingBottom: '30px',
    },
    containerStyle2 :{
        background: '#5F9E9D',
       
        width: '63%',
        height: '250px',
        text: 'center',
        paddingBottom: '30px',
    },
    imgStyle : {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        objectPosition: '100% 0',

        marginLeft: '-120px',
        marginTop: '20px',
    },

    imgStyle2 : {
        width: '250px',
        height:'250px',
        objectFit: 'cover',
        objectPosition: '0 100%',
        marginRight: '-140px',
        marginTop: '30px',
    },

    moveContainer:{
      maringTop: '-200px'
    },
    c1Style :{
        background: "steelblue",
        color: "white",
        padding: "1.5rem"
      },

      counter :{
        background: '#333',
        textAlign: 'center',
        width: '50px',
        borderRadius: '50%',
        margin: '1rem auto'
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
function MakeSomethingMove() {
  return (
     
    <div className={'section4  '}>
             <div class="row  hvr-icon-forward hvr-hang" style={styles.moveContainer}>
                 <div class="col lg2 hoverCon z-depth-3 hvr-float" style={styles.containerStyle}>
                 <Tilt className="Tilt" options={{ max : 235, transition:     true, scale:          1.2,speed:          10000, }} >
                 <div className="Tilt-inner"><img src={megaPhone} style={styles.imgStyle} /></div></Tilt>
                 </div>
                 <div class="col lg1 hvr-shutter-in-horizontal"></div>
                 <div class="col lg9 hoverCon z-depth-3 hvr-in" style={styles.containerStyle2}>
                 <div class="col s6  hvr-grow"><Tilt className="Tilt" options={options.caption} >
                    <h4 class="hvr-icon-spin" style={{fontFamily: 'Georgia, serif', fontSize:'34px', fontWeight: 'bold', marginLeft:'-30px'}}>Hover schmover...</h4>
                    <p class="hvr-pulse" style={{fontFamily: 'Georgia, serif', lineHeight: '1.5', letterSpacing: '1.25px', fontSize:'14px', fontWeight: 'normal', textAlign: 'left'}}>I don’t know, these blocks seem a bit static. Please add any hover function you think would fit in with the overall feel of the site on all 3 blocks. Also, add a short rationale of your choice in the hover state</p> </Tilt>
                 </div>
                    
          
                 <Tilt className="Tilt" options={options.imgWrapper} >
                     <img class="hvr-wobble-to-bottom-right hvr-shadow" src={cloudImg} style={styles.imgStyle2} />
                     </Tilt>
                 </div>
             </div>
             
         </div>
)}

export default  MakeSomethingMove;