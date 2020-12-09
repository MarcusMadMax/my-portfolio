//Scale Navigation Down
anime({
    targets: '.nav',
    scale: 0,
    duration: 0.1,
    loop: false,
    autoplay: true,
})

//Timeline for logo to move up & navigation to move in / out
var moveIn = anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    autoplay: false,
    duration: 0.1,
})


//Timelie Move In
moveIn
    .add({
        targets: '.logo',
        translateY: -190,
        duration: .1,
        autoplay: false,
    })
    .add({
        targets: '.nav-wrapper .nav',
        scale: 1,
        borderRadius: ['50%', '0%'],
        easing: 'linear'
    }, 400)
    .add({
        targets: '.nav-wrapper .nav li',
        translateX: 300,
        delay: anime.stagger(500),
        opacity: 1,
    }, 800)



var moveOut = anime.timeline({
    easing: 'easeOutExpo',
    duration: .1,
})

//Timelie Move Out
moveOut
    .add({
        targets: '.nav',
        scale: 0,
        borderRadius: ['0%', '50%'],
    })
    .add({
        targets: '.logo',
        translateY: 0,
    })

//Changing hamburger / bars Move In / Move Out Execution
const barsBtn = document.querySelector('.bars')
let menuOpen = false
barsBtn.addEventListener('click', () => {
    if (!menuOpen) {
        moveIn.play()
        barsBtn.classList.add('change')
        menuOpen = true
    } else {
        moveOut.play()
        barsBtn.classList.remove('change')
        menuOpen = false
    }
})

//Blending nav out when clicking link
let linkBtn = document.querySelectorAll('li a')
for (i = 0; i < linkBtn.length; i++) {
    let link = linkBtn[i]
    link.addEventListener('click', () => {
        moveOut.play()
        barsBtn.classList.remove('change')
        menuOpen = false
    })
}


//Work paragraph comes in / up
$(document).on('scroll', function() {
  $(".workexperience").lettering();
});

$(document).ready(function() {
  animation();
}, 1000);

function animation() {
  var title1 = new TimelineMax();
  title1.staggerFromTo(".workexperience", 2.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -280},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}

//Back to top
const backToTop = document.querySelector('.back-to-top')
backToTop.addEventListener('click', () => {
    window.anime({
        targets: document.scrollingElement,
        duration: 700,
        easing: 'linear',
        scrollTop: 0
    })
})

//Counting pixel
window.onscroll = function (e) {
    // console.log(window.scrollY); // Value of scroll Y in px
    var docHeight = document.querySelector('.wrapper').offsetHeight;
    var winHeight = window.innerHeight;
    var contentVisibilityHeight = docHeight > winHeight ? docHeight - winHeight : document.body.scrollHeight - winHeight
    var scrollPercent = Math.min(100 * window.scrollY / contentVisibilityHeight, 100)
    document.querySelector('.back-to-top span').innerHTML = Math.round(scrollPercent) + '%'
}


//Work Collection

    // const show = document.querySelector('.work img')
    // const workCollection = document.querySelector('.work-collection-description')
    // show.addEventListener('click', () => {
    //     if(workCollection.style.opacity === '0'){
    //         workCollection.classList.add('see')
    //     }else{
    //         workCollection.classList.remove('see')
    //     }
    // })
const workCollection = document.querySelector('.work-collection-description')
const learnMore = document.querySelector('.learn-more')
const hide = document.querySelector('.fas')
const show = document.querySelector('.learn-more h4')

function showMe(){
    if(workCollection.style.zIndex === '-1'){
        workCollection.toggle = '5'
        learnMore.style.zIndex = '-1'
    }else{
        workCollection.style.zIndex = '-1'
        learnMore.style.zIndex = '9'
    }
}

// function closeMe(){
//     if(workCollection.style.zIndex == '5'){
//         workCollection.style.zIndex= '-1'
//         learnMore.style.zIndex = '9'
//     }else{
//         workCollection.style.zIndex = '5'
//         learnMore.style.zIndex = '-1'
//     }
// }


show.addEventListener('click', showMe)

hide.addEventListener('click',closeMe )
