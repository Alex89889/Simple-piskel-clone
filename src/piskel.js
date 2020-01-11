import './screens/styles.css';

import wasteBin from './components/frames-list/images/waste-bin.png';
import copyImg from './components/frames-list/images/copy.png';
import rotateColor from './screens/images/rotate-col.png';

import penPic from './screens/images/pen.png';
import eraserPic from './screens/images/eraser.png';
import pipettePic from './screens/images/pipette.png';
import strokePic from './screens/images/stroke.png';
import bucketPic from './screens/images/bucket.png';
import paintPxPic from './screens/images/paint-px.png';

document.getElementById('pen').src = penPic;
document.getElementById('eraser').src = eraserPic;
document.getElementById('pipette').src = pipettePic;
document.getElementById('stroke').src = strokePic;
document.getElementById('bucket').src = bucketPic;
document.getElementById('paintPx').src = paintPxPic;

document.getElementById('remove').src = wasteBin;
document.getElementById('copy').src = copyImg;
document.getElementById('rotate-color').src = rotateColor;

import SimplePiskel from './screens/app.js';

const app = new SimplePiskel();
