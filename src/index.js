
import './screens/landing/styles.css';

import appPic from './screens/landing/images/screenshot.png';
import animationPic from './screens/landing/images/piskel-gif-1.gif';
import animation1Pic from './screens/landing/images/piskel-gif-2.gif';
import animation2Pic from './screens/landing/images/piskel-gif-3.gif';

const screenshot = document.getElementById('screen-img');
screenshot.src = appPic;

const animation1 = document.getElementById('animation1');
animation1.src = animationPic;

const animation2 = document.getElementById('animation2');
animation2.src = animation1Pic;

const animation3 = document.getElementById('animation3');
animation3.src = animation2Pic;

