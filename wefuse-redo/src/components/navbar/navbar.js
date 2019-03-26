import React, { Component } from 'react';
import { Container, Dropdown, Button, NavItem } from 'react-materialize';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './styles/navbar.css';

const styles = {
  navStyle: {
    background: '#1B1A18',
    color: '#5F9E9D'
  },

  linkColorStyle: {
    color:'#5F9E9D'
  }
}

class NavBarComponent extends Component {


  render() {
    return (
  <div className="navbar-fixed ">
  <nav className="nav navbar-transition cool-navbar z-depth-0" role="navigation" style={styles.navStyle}>
    <div className="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html" style={styles.navStyle}><i className="material-icons left ">dehaze</i></a></li>

      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html" style={styles.navStyle}><i className="material-icons " >search</i></a></li>
      </ul>
    </div>
  </nav>
  </div>
    );
  }
}

export default NavBarComponent;