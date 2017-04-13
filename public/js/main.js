$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var pinSplash = new ScrollMagic.Scene({
    duration: '29%',
    triggerElement: '#splash',
    triggerHook: 0,
  })
    .setPin('#splash', {
      pushFollowers: false,
    })
    .addIndicators({
      name: 'splash',
      colorTrigger: 'black',
      colorStart: '#75c695',
      colorEnd: 'pink'
    })
    .addTo(controller);

  var contentOverSplash = new ScrollMagic.Scene({
    // duration: '30%',
    triggerElement: '.hands',
    triggerHook: 0.4,
  })
    .setPin('#splash', {
      pushFollowers: false,
    })
    .addIndicators({
      name: 'splash',
      colorTrigger: 'black',
      colorStart: '#75c695',
      colorEnd: 'pink'
    })
    .addTo(controller);

  var showNav = new ScrollMagic.Scene({
      triggerElement: '.hands',
      triggerHook: .07,
    })
    .setClassToggle(".primary-nav", 'show')
    .addIndicators({
      name: 'nav',
      colorTrigger: 'black',
      colorStart: '#75c695',
      colorEnd: 'pink'
    })
    .addTo(controller);
})

// duration: 400,    // the scene should last for a scroll distance of 100px
// offset: 50        // start this scene after scrolling for 50px
