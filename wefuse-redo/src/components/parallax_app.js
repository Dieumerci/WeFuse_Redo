import React, {Component} from 'react';
import Header from './navbar/index';
import First_Page from './section1/first_page';
import Second_Page from './section2/second_page';
import Third_page from './section3/third_page';
import FooterComponent from './footer/footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Parallax } from 'react-scroll-parallax';
 
class ParallaxApp extends Component {
  render() {
      return (
          <div>
        <React.StrictMode>
        <div><Header/></div>
        
        
        <Fullpage  >
          <FullpageNavigation/>

          <FullPageSections>
            <FullpageSection >									
              
										
                    <div className="App">
                
                <header className="App-header">
                  <p><ScrollAnimation
										animateIn="fadeInRight" animateOut="fadeOutLeft" initiallyVisible={true}>
                  <div><First_Page/></div>	</ScrollAnimation>
                  </p>


                </header>
              </div>
								
              

            </FullpageSection>
            <FullpageSection>
            <div className="App">
                
                <header className="App-header">
                  
                  <p>
                  <div><Second_Page/></div>
                  </p>

                </header>
              </div>

            </FullpageSection>


            <FullpageSection>
            <div className="App">
                
                <header className="App-header">
                  
                  
                  <div><Third_page/></div>
                 

                </header>
              </div>
            </FullpageSection>
            <FullpageSection style={{ background: '#171717', height: '400px'}}>
         
                

                  <div><FooterComponent/></div>
                 

           
           
            </FullpageSection>
          </FullPageSections>
          
        </Fullpage>
        
        
      </React.StrictMode>
      
          </div>
  );
  }
}

export default ParallaxApp;