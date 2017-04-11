$(document).ready(function(){
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
      triggerElement: '#splash', // starting scene, when reaching this element
      duration: 50,    // the scene should last for a scroll distance of 100px
      // offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("#splash")
    .addIndicators({
      name: 'about fade in',
      colorTrigger: 'black',
      colorStart: '#75c695',
      colorEnd: 'pink'
    })
    .addTo(controller);
})
