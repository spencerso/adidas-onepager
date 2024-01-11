import { gsap } from "gsap/dist/gsap"

export function initAnimations(page, refs) {
  if (page === 'index') {
    onePagerAnimations(refs)
  }
}

export function onePagerAnimations(refs) {
  console.log('start onePagerAnimations - ref: ', refs[0].current)
  const deviceWidth = window.innerWidth
  const isMobile = deviceWidth < 769
  const wrapper = refs[0].current
  const sectionOne = wrapper.querySelector('.sectionOne')
  const sectionTwo = wrapper.querySelector('.sectionTwo')
  const sectionThree = wrapper.querySelector('.sectionThree')
  const sectionFour = wrapper.querySelector('.sectionFour')
  const sectionFive = wrapper.querySelector('.sectionFive')
  const sectionSix = wrapper.querySelector('.sectionSix')
  const sectionSeven = wrapper.querySelector('.sectionSeven')
  const sectionEight = wrapper.querySelector('.sectionEight')
  console.log('sectionOne: ', sectionOne)
  console.log('isMobile: ', isMobile)
  console.log('gsap: ', gsap)

  gsap.set(sectionOne.querySelector('.sectionOneLogo .adidasLogo'), { y: 40, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-impossible'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-is'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-nothing'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { h: 0 })
  // gsap.set(refs.mainHeroWrapper.current, {
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   zIndex: 1,
  // })

  const sectionOneTl = gsap.timeline()
  sectionOneTl
    .to(sectionOne.querySelector('.sectionOneLogo .adidasLogo'), { delay: 1, duration: 1, y: 0, opacity: 1 })
    .to(sectionOne.querySelector('.sectionOneLogo .tagline-impossible'), { delay: 1, duration: 1, y: 0, opacity: 1 }, '-=1.2')
    .to(sectionOne.querySelector('.sectionOneLogo .tagline-is'), { delay: 1, duration: 1, y: 0, opacity: 1 }, '-=1.2')
    .to(sectionOne.querySelector('.sectionOneLogo .tagline-nothing'), { delay: 1, duration: 1, y: 0, opacity: 1 }, '-=1.2')
    .to(sectionOne.querySelector('.sectionSideBar'), { duration: 1, width: '100%', opacity: 1 }, '-=0.8')

  // const sectionOneTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: sectionOne,
  //     start: "top top",
  //     end: window.innerHeight * 2,
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //   }
  // })
  //   .to(sectionOne.querySelector('.sectionOneLogo'), { duration: 0.5, y: 0, opacity: 1 }, '+=0.5')
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: refs.rotatorAnimations.current,
  //     start: "top top",
  //     end: window.innerHeight * 22,
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //   },
  // })
  //   .to(refs.rotatorText.current, { duration: 0, display: 'block' })
}