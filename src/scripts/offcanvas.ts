import { gsap } from "@/utils/gsap";
let offcanvasCont = document.querySelector('.offcanvas'),
    navElements = offcanvasCont?.querySelectorAll('.big-links>div'),
    menuIcon = document.querySelector('.menu-icon'),
    isOpen = false,
    tl = gsap.timeline({paused: true})

tl.to(offcanvasCont, {
    height: '100dvh',
    duration: 1,
    display: 'block'
})

if(navElements){
    tl.from(navElements, {
        stagger: 0.1,
        opacity: 0,
        y: 50
    })
}
// navElements?.forEach(el => {
//     tl.from(el, {
//         y:-50,
//         opacity: 0,
//         duration: 0.2
//     })
// })

menuIcon?.addEventListener('click', () => {
    if(isOpen){
        tl.timeScale(2).reverse()
    } else{
        tl.timeScale(1).play()
    }
    isOpen = !isOpen
})