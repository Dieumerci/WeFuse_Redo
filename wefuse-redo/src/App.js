import React, { Component } from 'react';
import './App.css';
import ParallaxApp from './components/parallax_app';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollReveal from 'scrollreveal'


class App extends Component {
  render() {
    return (
      <div>
        <ParallaxProvider></ParallaxProvider>
        <ParallaxApp/>
      </div>
    );
  }
}

export default App;