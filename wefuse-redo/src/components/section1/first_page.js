import React from 'react'

import { Container, Row, Col } from 'react-grid-system';
import '../styles/first_page_style.css';
import { FadeIn } from "animate-components";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles  ={
  colorStyle:{
    fontFamily: "Times New Roman",
    color: '#fff',
    fontSize:'1.4vw',
  },
  colorStyles:{
    fontFamily: "Times New Roman",
    color: '#fff',
    fontSize:'5.18vw',
  },
  ConStyleNew:{
    display: 'flex', 
    minHeight: '100vh', 
  
  }
  ,colorNew:{
    color: '#869298',
    fontSize:'1.4vw',
  }
}

function First_Page() {
  return (
     <div className={'section1'}>
             <div>
          <Container style={styles.ConStyleNew} >
            <Row>
              <Col lg={1}>
              <ul style={styles.colorNew}>
              <li id="rotate-text">Twitter</li>
              <li id="rotate-text"> Instagram </li>
              <li id="rotate-text"> Facebook</li>  
              </ul>
                {/* <leftSideNavBar/> */}
              </Col>
              <Col lg={10}>
              
              <div className="circle"><div class="parallax">
    <AnimatedOnScroll animationIn="fadeInUpBig" animationOut="fadeIn">

          
            <div class="animated  fadeInUpBig delay-2s"><p style={styles.colorStyle}>HEY! HO! HERE YOU GO</p>
            <h1 style={styles.colorStyles}><FadeIn name="fadeInUpBig" timingFunction="ease-out">This is your tests site</FadeIn></h1></div>
            </AnimatedOnScroll>
    </div>
              
              
</div>
              </Col>
              <Col lg={1}>
              </Col>

            </Row>
          </Container>
        </div>

    
    </div>
  )
}

export default First_Page;