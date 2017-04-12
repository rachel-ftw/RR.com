$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  $('.test').each(function(){
    new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: .9 ,
      })
      .setClassToggle(this, 'fade-in')
      .addIndicators({
        name: 'about fade',
        colorTrigger: 'black',
        colorStart: '#75c695',
        colorEnd: 'pink'
      })
      .addTo(controller);
  })

  new ScrollMagic.Scene({
      triggerElement: '.hands',

      triggerHook: .1,
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
