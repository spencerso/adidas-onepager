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

  // section 1 - staging
  gsap.set(sectionOne.querySelector('.sectionOneLogo .adidasLogo'), { y: 40, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-impossible'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-is'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-nothing'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  // section 2 - staging
  gsap.set(sectionTwo, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(255, 192, 203, 0)' })
  gsap.set(sectionTwo.querySelector('.profilePhoto'), { y: 100, opacity: 0 })
  gsap.set(sectionTwo.querySelector('.profileText'), { y: 100, opacity: 0 })
  gsap.set(sectionTwo.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionTwo.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  // section 3 - staging
  gsap.set(sectionThree, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0)' })
  gsap.set(sectionThree.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionThree.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionThree.querySelector('.sectionContentText'), { position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', width:
'100%', opacity: 0 })
  gsap.set(sectionThree.querySelector('.iconographyTitle'), { opacity: 0, y: 20, marginTop: isMobile ? '40%' : '20%' })
  gsap.set(sectionThree.querySelector('.iconographyLabelOne'), { opacity: 0, y: 20 })
  gsap.set(sectionThree.querySelector('.iconographyLabelTwo'), { opacity: 0, y: 20 })
  gsap.set(sectionThree.querySelector('.iconCollage'), { width: 0, overflow: 'hidden' })
  gsap.set(sectionThree.querySelector('.iconCollage img'), isMobile ? { width: '372px' } : { width: '864px' })
  // section 4 - staging
  gsap.set(sectionFour, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(230, 230, 230, 0)' })
  gsap.set(sectionFour.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionFour.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionFour.querySelector('.sectionContentText'), { zIndex: 20, position: 'absolute', y: 0, opacity: 0, width: '90%' })
  gsap.set(sectionFour.querySelector('.backgroundImage'), { opacity: 0 })

  const productsCollageItems = sectionFour.querySelectorAll('.productsCollage div')
  

  // all sections animation timeline
  const sectionOneTl = gsap.timeline()
  sectionOneTl
    .to(sectionOne.querySelector('.sectionOneLogo .adidasLogo'), { delay: 1, duration: 1, y: 0, opacity: 1 })
    .to(sectionOne.querySelector('.sectionOneLogo .tagline-impossible'), { delay: 1, duration: 0.7, y: 0, opacity: 1 }, '-=1.2')
    .to(sectionOne.querySelector('.sectionOneLogo .tagline-is'), { delay: 1, duration: 0.7, y: 0, opacity: 1 }, '-=1.2')
    .to(sectionOne.querySelector('.sectionOneLogo .tagline-nothing'), { delay: 1, duration: 0.7, y: 0, opacity: 1 }, '-=1.2')
    .to(sectionOne.querySelector('.sectionSideBar'), isMobile ? { duration: 1, width: '100%', opacity: 1 } : { duration: 1, height: '100%', opacity: 1 }, '-=0.4')

  const sectionTwoTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: window.innerHeight * 15,
      scrub: true,
      pin: true,
      markers: true,
    }
  })
  sectionTwoTl
    .to(sectionTwo.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' })
    .to(sectionTwo, { duration: 0.5, backgroundColor: 'rgba(0,0,0,1)' }, '-=0.2')
    .to(sectionTwo.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 }, '-=0.4')
    .to(sectionTwo.querySelector('.profileText'), { duration: 0.5, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionTwo.querySelector('.profilePhoto'), { duration: 0.5, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionTwo.querySelector('.profileText'), { duration: 1, scale: 1.1 }, '-=0.2')
    .to(sectionTwo.querySelector('.profilePhoto'), { duration: 1, y: -20 }, '-=1')
    .to(sectionTwo, { duration: 0.5, opacity: 1 })
    .to(sectionTwo.querySelector('.profilePhoto'), { duration: 0.5, y: -100, opacity: 0 })
    .to(sectionTwo.querySelector('.profileText'), { duration: 0.5, y: 100, opacity: 0 }, '-=0.5')
    // section three animations
    .to(sectionTwo.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 0 })
    .to(sectionThree.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.2')
    .to(sectionThree.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 })
    .to(sectionThree, { duration: 0.5, backgroundColor: 'rgb(255, 192, 203, 1)' }, '-=0.2')
    .to(sectionThree.querySelector('.sectionContentText'), { duration: 0.5, top: '50%', opacity: 1 })
    .to(sectionThree.querySelector('.sectionContentText'), { duration: 0.5, top: isMobile ? '30%' : '20%' })
    .to(sectionThree.querySelector('.iconCollage'), { duration: 0.5, width: '100%' }, '-=0.2')
    .to(sectionThree.querySelector('.sectionContentText'), { duration: 0.5, top: '15%' })
    .to(sectionThree.querySelector('.iconographyTitle'), { duration: 0.5, opacity: 1, y: 0 }, '-=0.5')
    .to(sectionThree.querySelector('.iconographyLabelOne'), { duration: 0.5, opacity: 1, y: 0 }, '-=0.5')
    .to(sectionThree.querySelector('.iconographyLabelTwo'), { duration: 0.5, opacity: 1, y: 0 }, '-=0.5')
    // section three out / four in animations
    .to(sectionThree, { duration: 0.5, opacity: 1 })
    .to(sectionThree.querySelector('.sectionContentText'), { duration: 0.3, top: '-10%', opacity: 0 })
    .to(sectionThree.querySelector('.iconographyTitle'), { duration: 0.3, x: '-100%', opacity: 0 }, '-=0.3')
    .to(sectionThree.querySelector('.iconCollage'), { duration: 0.3, y: '100vh' }, '-=0.3')
    .to(sectionThree.querySelector('.iconographyLabelOne'), { duration: 0.3, opacity: 0, y: 20 }, '-=0.3')
    .to(sectionThree.querySelector('.iconographyLabelTwo'), { duration: 0.3, opacity: 0, y: 20 }, '-=0.3')
    .to(sectionFour.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.5')
    .to(sectionThree.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 })
    .to(sectionFour.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 }, '-=0.5')
    .to(sectionFour, { duration: 0.5, backgroundColor: 'rgb(230, 230, 230, 1)' }, '-=0.5')
    .to(sectionFour.querySelector('.sectionContentText'), { duration: 1, y: isMobile ? '25vh' : '5vh', opacity: 1 })

  productsCollageItems.forEach((item) => {
    gsap.set(item, { opacity: 0, y: 50 })
    sectionTwoTl.to(item, { duration: 0.5, opacity: 1, y: -100 })
  })
  
}