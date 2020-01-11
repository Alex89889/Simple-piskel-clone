import Pen from '../components/pen/index';
import Eraser from '../components/eraser/index';
import Stroke from '../components/stroke/index';
import Pipette from '../components/pipette/index';
import PaintPx from '../components/paintPx/index';
import Bucket from '../components/bucket/index';

import { FramesAdd } from '../components/frames-list/index';
import SaveGif from '../components/gif/gif';

const mainCanvas = document.getElementById('main-canvas');

mainCanvas.width = 64;
mainCanvas.height = 64;

const allFrames = document.querySelectorAll('.frame');
allFrames.forEach((item, i) => {
  allFrames[i].width = 64;
  allFrames[i].height = 64;
});



export default class SimplePiskel {
  constructor() {
    this.addFirstFrame();
    this.toolSelect();
    this.addOtherFrames();
    this.speedValue();
	this.changeCanvas();
  }

 addFirstFrame() {
    document.addEventListener('DOMContentLoaded', () => {
     
      const selectedFrame = document.getElementById('frame');
      selectedFrame.classList.add('selected-frame');

      SimplePiskel.lineWidth();

      new SaveGif();
    });
  }

  speedValue() {
    const speed = document.getElementById('speedAnimation');
    function getSpeedValue() {
      const speedValue = speed.value;
      speed.title = `${speedValue}`;
    }
    document.addEventListener('DOMContentLoaded', getSpeedValue);
    speed.addEventListener('input', getSpeedValue);
  }



  addOtherFrames() {
    const newFrameBtn = document.getElementById('new-frame-button');
    newFrameBtn.addEventListener('click', () => {
      new FramesAdd(mainCanvas);
    }, { once: true });
  }
  
  static lineWidth() {
    const allLineWidth = document.querySelector('.line-width-wrapper');
    const lineWidths = document.querySelectorAll('.line-width');

    allLineWidth.addEventListener('click', () => {
      lineWidths.forEach((item) => {
        if (window.event.target === allLineWidth) {
          return;
        }
        if (item.classList.contains('chosen-line') && window.event.target === item) {
          return;
        }
        if (item.classList.contains('chosen-line')) {
          item.classList.remove('chosen-line');
        } else if (window.event.target === item) {
          item.classList.add('chosen-line');
        }
      });
    });
  }

 
  changeCanvas(){
	const btn32 = document.getElementById('btn32');
	const btn64 = document.getElementById('btn64');
	const btn128 = document.getElementById('btn128');
	const coordWrap = document.getElementById('coordWrap');
    btn32.addEventListener('click', (e) => {
		mainCanvas.width = 32;
		mainCanvas.height = 32;
		coordWrap.innerHTML = `[${mainCanvas.width}x${mainCanvas.height}]`;
		this.toolSelect();
    }); 
	
    btn64.addEventListener('click', (e) => {
		mainCanvas.width = 64;
		mainCanvas.height = 64;
		coordWrap.innerHTML = `[${mainCanvas.width}x${mainCanvas.height}]`;
		this.toolSelect();
    }); 
	
    btn128.addEventListener('click', (e) => {
		mainCanvas.width = 128;
		mainCanvas.height = 128;
		coordWrap.innerHTML = `[${mainCanvas.width}x${mainCanvas.height}]`;
		this.toolSelect();
    }); 
  }
  
  toolSelect() {
    const tools = document.getElementById('tools');
    const tool = document.querySelectorAll('.tool');
    const toolImg = document.querySelectorAll('.tools__image');

    tools.addEventListener('click', () => {
      toolImg.forEach((item, i) => {
        if (tool[i].classList.contains('chosen')) {
          tool[i].classList.remove('chosen');
        } else if (window.event.target === item) {
          tool[i].classList.add('chosen');
        }
      });
    });

    this.toolSelectCanvas();
    this.toolSelectEraser();
    this.toolSelectStroke();
    this.toolSelectPipette();
    this.toolSelectPaintPx();
    this.toolSelectBucket();
  }

  toolSelectCanvas() {
    const penTool = document.getElementById('penTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (penTool.classList.contains('chosen')) {
        new Pen(mainCanvas);
      }
    });
  }

  toolSelectEraser() {
    const eraserTool = document.getElementById('eraserTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (eraserTool.classList.contains('chosen')) {
        new Eraser(mainCanvas);
      }
    });
  }

  toolSelectStroke() {
    const strokeTool = document.getElementById('strokeTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (strokeTool.classList.contains('chosen')) {
        new Stroke(mainCanvas);
      }
    });
  }

  toolSelectPipette() {
    const pipetteTool = document.getElementById('pipetteTool');
    mainCanvas.addEventListener('click', (e) => {
      if (pipetteTool.classList.contains('chosen')) {
        new Pipette(e, mainCanvas);
      }
    });
  }


  toolSelectPaintPx() {
    const paintPxTool = document.getElementById('paintPxTool');
    mainCanvas.addEventListener('click', (e) => {
      if (paintPxTool.classList.contains('chosen')) {
        new PaintPx(e, mainCanvas);
      }
    });
  }


  toolSelectBucket() {
    const bucketTool = document.getElementById('bucketTool');
    mainCanvas.addEventListener('mouseenter', () => {
      if (bucketTool.classList.contains('chosen')) {
        new Bucket(mainCanvas);
      }
    });
  }
}
