anime({
    targets: '.nav',
    scale: 0,
    duration: 0.1,
    loop: false,
    autoplay: true,
})


var moveIn = anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    autoplay: false,
    duration: 0.1,
})

moveIn
    .add({
        targets: '.logo',
        translateY: -190,
        duration: .1,
        autoplay: false,
    })
    .add({
        targets: '.nav',
        scale: 1,
        borderRadius: ['50%', '0%'],
        easing: 'linear'
    }, 400)
    .add({
        targets: 'li',
        translateX: 300,
        delay: anime.stagger(500),
        opacity: 1,
    }, 800)



var moveOut = anime.timeline({
    easing: 'easeOutExpo',
    duration: .1,
})
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
let linkBtn = document.querySelectorAll('li a')

for (i = 0; i < linkBtn.length; i++) {
    let link = linkBtn[i]
    link.addEventListener('click', () => {
        moveOut.play()
        barsBtn.classList.remove('change')
        menuOpen = false
    })
}
