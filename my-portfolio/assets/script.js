$(function(){
    var anime1 = anime({
        targets: '.circle',
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        autoplay: false,
      });
      // document.querySelector('.button').onclick = anime1 //onclick event
      $('button').on('click',function(){
          anime1.play()
      })

    //   anime({
    //     targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    //     points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    //     baseFrequency: 0,
    //     scale: 1,
    //     loop: true,
    //     direction: 'alternate',
    //     easing: 'easeInOutExpo'
    //   });
})