import { gsap } from "gsap/dist/gsap"

export function initAnimations(page, refs) {
  if (page === 'index') {
    onePagerAnimations(refs)
  }
}

export function onePagerAnimations(refs) {
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

  // section 1 - staging
  gsap.set(sectionOne, {zIndex: 8})
  gsap.set(sectionOne.querySelector('.sectionOneLogo .adidasLogo'), { y: 40, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-impossible'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-is'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionOneLogo .tagline-nothing'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionOne.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  // section 2 - staging
  gsap.set(sectionTwo, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255, 192, 203, 0)', zIndex: 7 })
  gsap.set(sectionTwo.querySelector('.profilePhoto'), { y: 100, opacity: 0 })
  gsap.set(sectionTwo.querySelector('.profileText'), { y: 100, scale: 0.8, opacity: 0 })
  gsap.set(sectionTwo.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionTwo.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  // section 3 - staging - SML
  gsap.set(sectionThree, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(242, 227, 239, 0)', zIndex: 6 })
  gsap.set(sectionThree.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionThree.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionThree.querySelector('.sectionContentText'), { position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', width:
'100%', opacity: 0 })
  gsap.set(sectionThree.querySelector('.iconographyTitle'), { opacity: 0, y: 20, marginTop: isMobile ? '40%' : '20%' })
  gsap.set(sectionThree.querySelector('.iconographyLabelOne'), { opacity: 0, y: 20 })
  gsap.set(sectionThree.querySelector('.iconographyLabelTwo'), { opacity: 0, y: 20 })
  gsap.set(sectionThree.querySelector('.iconCollage'), { width: 0, overflow: 'hidden' })
  gsap.set(sectionThree.querySelector('.iconCollage img'), isMobile ? { width: '372px' } : { width: '864px' })
  // section 4 - staging - SML
  gsap.set(sectionFour, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(250, 183, 251, 0)', zIndex: 5 })
  gsap.set(sectionFour.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionFour.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionFour.querySelector('.sectionContentText'), { zIndex: 20, position: 'absolute', y: 0, opacity: 0 })
  gsap.set(sectionFour.querySelector('.backgroundImage'), { opacity: 0 })
  // section 5 - staging - Warsaw
  gsap.set(sectionFive, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(27, 27, 27, 0)', zIndex: 4 })
  gsap.set(sectionFive.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionFive.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionFive.querySelector('.sectionContentText'), { zIndex: 30, position: 'absolute', top: '50%', opacity: 0 })
  gsap.set(sectionFive.querySelector('.warsawAssetDefault'), { opacity: 0 })
  gsap.set(sectionFive.querySelector('.warsawAdidasHqText'), { y: 20, opacity: 0 })
  gsap.set(sectionFive.querySelector('.warsawDonutRelayDefault'), { opacity: 0 })
  gsap.set(sectionFive.querySelector('.warsawDonutRelayText'), { y: 20, opacity: 0 })
  // section 6 - staging - emerald
  gsap.set(sectionSix, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(217, 234, 211, 0)', zIndex: 3 })
  gsap.set(sectionSix.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionSix.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionSix.querySelector('.sectionContentText'), { zIndex: 30, position: 'absolute', top: '50%', opacity: 0 })
  // section 7 - staging - ASUO
  gsap.set(sectionSeven, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255, 242, 204, 0)', zIndex: 2 })
  gsap.set(sectionSeven.querySelector('.sectionSideBar .navigation'), { opacity: 0 })
  gsap.set(sectionSeven.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  gsap.set(sectionSeven.querySelector('.sectionContentText'), { opacity: 0, y: 20 })
  gsap.set(sectionSeven.querySelector('.asuoAssets'), { y: 20, opacity: 0 })
  // section 8 - staging
  gsap.set(sectionEight, { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(230, 230, 230, 0)', zIndex: 1 })
  gsap.set(sectionEight.querySelector('.sectionEightLogo .adidasLogo'), { y: 40, opacity: 0 })
  gsap.set(sectionEight.querySelector('.sectionEightLogo .tagline-impossible'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionEight.querySelector('.sectionEightLogo .tagline-is'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionEight.querySelector('.sectionEightLogo .tagline-nothing'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionEight.querySelector('.sectionEightLogo .tagline-final'), { display: 'inline-block', y: 20, opacity: 0 })
  gsap.set(sectionEight.querySelector('.sectionSideBar'), isMobile ? { width: 0 } : { height: 0 })
  
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
      end: window.innerHeight * 30,
      scrub: true,
      pin: true,
      markers: false,
    }
  })
  sectionTwoTl
    .to(sectionOne, { duration: 0, zIndex: 1 })
    .to(sectionTwo.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' })
    .to(sectionTwo, { duration: 0.5, backgroundColor: 'rgba(0,0,0,1)', zIndex: 9 }, '-=0.2')
    .to(sectionTwo.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 }, '-=0.4')
    .to(sectionTwo.querySelector('.profileText'), { duration: 0.5, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionTwo.querySelector('.profilePhoto'), { duration: 0.5, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionTwo.querySelector('.profileText'), { duration: 1, scale: 1 }, '-=0.2')
    .to(sectionTwo.querySelector('.profilePhoto'), { duration: 1, y: -20 }, '-=1')
    .to(sectionTwo, { duration: 0.5, opacity: 1 })
    .to(sectionTwo.querySelector('.profilePhoto'), { duration: 0.5, y: -100, opacity: 0 })
    .to(sectionTwo.querySelector('.profileText'), { duration: 0.5, y: 100, opacity: 0 }, '-=0.5')
    // section three animations
    .to(sectionTwo, { duration: 0, zIndex: 2 })
    .to(sectionTwo.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 0 })
    .to(sectionThree, { duration: 0, zIndex: 10 })
    .to(sectionThree.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.2')
    .to(sectionThree.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 })
    .to(sectionThree, { duration: 0.5, backgroundColor: 'rgba(242, 227, 239, 1)' }, '-=0.2')
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
    .to(sectionFour, { duration: 0, zIndex: 11 })
    .to(sectionFour.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.5')
    .to(sectionThree.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 0 })
    .to(sectionThree, { duration: 0, zIndex: 3 })
    .to(sectionFour.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 }, '-=0.5')
    .to(sectionFour, { duration: 0.5, backgroundColor: 'rgb(250, 183, 251, 1)' }, '-=0.5')
    .to(sectionFour.querySelector('.sectionContentText'), { duration: 1, y: isMobile ? '17vh' : '5vh', opacity: 1 })

  productsCollageItems.forEach((item) => {
    gsap.set(item, { opacity: 0, y: 50 })
    sectionTwoTl.to(item, { duration: 0.5, opacity: 1, y: -100 })
  })

  sectionTwoTl
    .to(sectionFour.querySelector('.productsCollage'), { duration: 0.3, opacity: 0 })
    .to(sectionFour.querySelector('.sectionContentText'), { duration: 0.5, y: isMobile ? '18vh' : '6vh', opacity: 0 }, '-=0.3')
    .to(sectionFour.querySelector('.sectionSideBar .navigation'), { duration: 0.3, opacity: 0 }, '-=0.2')
    .to(sectionFive, { duration: 0, zIndex: 12 })
    .to(sectionFive.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' })
    .to(sectionFour, { duration: 0, zIndex: 4 })
    .to(sectionFive.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 }, '-=0.2')
    .to(sectionFive, { duration: 0.5, backgroundColor: 'rgba(27, 27, 27, 1)' }, '-=0.5')
    .to(sectionFive.querySelector('.sectionContentText'), { duration: 0.5, top: '40%', opacity: 1 }, '-=0.5')
    .to(sectionFive.querySelector('.sectionContentText'), { duration: 0.5, top: '5%' }, '+=0.2')
    .to(sectionFive.querySelector('.warsawAdidasHqText'), { duration: 0.5, opacity: 1 }, '-=0.4')
    .to(sectionFive.querySelector('.warsawAdidasHq'), { duration: 0.5, opacity: 1 }, '-=0.4')
    .to(sectionFive, { duration: 1, opacity: 1 })
    .to(sectionFive.querySelector('.warsawAdidasHqText'), { duration: 0.5, opacity: 0, y: -20 })
    .to(sectionFive.querySelector('.warsawAdidasHq'), { duration: 0.5, opacity: 0 }, '-=0.3')
    .to(sectionFive.querySelector('.warsawDonutRelayText'), { duration: 0.5, opacity: 1 }, '-=0.2')
    .to(sectionFive.querySelector('.warsawDonutRelay'), { duration: 0.5, opacity: 1 }, '-=0.3')
    .to(sectionFive, { duration: 1, opacity: 1 })
    .to(sectionFive.querySelector('.warsawDonutRelayText'), { duration: 0.5, opacity: 0 })
    .to(sectionFive.querySelector('.warsawDonutRelay'), { duration: 0.5, opacity: 0 }, '-=0.3')
    .to(sectionFive.querySelector('.sectionContentText'), { duration: 0.5, opacity: 0 })
    .to(sectionFive.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 0 }, '-=0.2')
    .to(sectionSix, { duration: 0.5, backgroundColor: 'rgba(217, 234, 211, 1)', zIndex: 13 }, '-=0.5')
    .to(sectionSix.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.5')
    .to(sectionFive, { duration: 0, zIndex: 5 })
    .to(sectionSix.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 })
    .to(sectionSix.querySelector('.sectionContentText'), { duration: 0.8, top: '40%', opacity: 1 })
    .to(sectionSix.querySelector('.sectionContentText'), { duration: 0.5, top: '2%', opacity: 1 })
    .to(sectionSix.querySelector('.photographyAssetWrapper'), { duration: 0.5, opacity: 1 })
    .to(sectionSix, { duration: 1, opacity: 1 })
    .to(sectionSix.querySelector('.sectionContentText'), { duration: 0.5, opacity: 0 })
    .to(sectionSix.querySelector('.photographyAssetWrapper'), { duration: 0.5, opacity: 0 }, '-=0.5')
    .to(sectionSix.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 0 }, '-=0.5')
    .to(sectionSeven, { duration: 0.5, backgroundColor: 'rgba(255, 242, 204, 1)', zIndex: 14 }, '-=0.5')
    .to(sectionSeven.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.5')
    .to(sectionSix, { duration: 0, zIndex: 6 })
    .to(sectionSeven.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 1 })
    .to(sectionSeven.querySelector('.sectionContentText'), { duration: 0.5, y: 0, opacity: 1 })
    .to(sectionSeven.querySelector('.asuoAssets'), { duration: 0.5, y: 0, opacity: 1 }, '-=0.5')
    .to(sectionSeven, { duration: 1, opacity: 1 })
    .to(sectionSeven.querySelector('.sectionSideBar .navigation'), { duration: 0.5, opacity: 0 })
    .to(sectionSeven.querySelector('.sectionSideBar'), { duration: 0.5, opacity: 0 })
    .to(sectionSeven.querySelector('.sectionContentText'), { duration: 0.5, y: 20, opacity: 0 })
    .to(sectionSeven.querySelector('.asuoAssets'), { duration: 0.5, opacity: 0 }, '-=0.5')
    .to(sectionEight, { duration: 0.5, backgroundColor: 'rgb(230, 230, 230, 1)', zIndex: 15 }, '-=0.5')
    .to(sectionEight.querySelector('.sectionSideBar'), isMobile ? { duration: 0.5, width: '100%' } : { duration: 0.5, height: '100%' }, '-=0.5')
    .to(sectionSeven, { duration: 0, zIndex: 7 })
    .to(sectionEight.querySelector('.sectionSideBar .navigation'), { 
      duration: 0.5, 
      opacity: 1,
      onReverseComplete: () => {
        document.querySelector('.scrollArrow span').classList.remove('reverse') 
      }
     })
    .to(sectionEight.querySelector('.sectionEightLogo .adidasLogo'), { duration: 1, y: 0, opacity: 1 })
    .to(sectionEight.querySelector('.sectionEightLogo .tagline-impossible'), { duration: 0.7, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionEight.querySelector('.sectionEightLogo .tagline-is'), { duration: 0.7, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionEight.querySelector('.sectionEightLogo .tagline-nothing'), { duration: 0.7, y: 0, opacity: 1 }, '-=0.2')
    .to(sectionEight.querySelector('.sectionEightLogo .tagline-final'), { 
      duration: 0.7, 
      y: 0, 
      opacity: 1, 
      onComplete: () => { 
        document.querySelector('.scrollArrow span').classList.add('reverse') 
      }
    })

  const warsawAssetsTl = gsap.timeline()
  sectionFive.querySelectorAll('.warsawAdidasHq div').forEach((item) => {
    const imgWidth = isMobile ? getRandomInteger(180, 250) : getRandomInteger(300, 450)
    warsawAssetsTl
    .fromTo(item, { y: isMobile ? '80vh' : '100vh', left: `${getRandomInteger(25,80)}%`, width: `${imgWidth}px` }, { duration: getRandomInteger(30,40), y: '-100vh', repeat: -1 }, '-=30')
  })

  const warsawAssetsDonutRelayTl = gsap.timeline()
  sectionFive.querySelectorAll('.warsawDonutRelay div').forEach((item) => {
    const imgWidth = isMobile ? getRandomInteger(180, 250) : getRandomInteger(300, 450)
    warsawAssetsDonutRelayTl
      .fromTo(item, { y: isMobile ? '80vh' : '100vh', left: `${getRandomInteger(25,80)}%`, width: `${imgWidth}px` }, { duration: getRandomInteger(30,40), y: '-100vh', repeat: -1 }, '-=30')
  })

  const photographyAssetsTl = gsap.timeline()
  sectionSix.querySelectorAll('.photographyAssetWrapper div').forEach((item) => {
    const imgWidth = isMobile ? getRandomInteger(180, 250) : getRandomInteger(300, 450)
    photographyAssetsTl
      .fromTo(item, { x: '100vw', top: `${getRandomInteger(25,80)}%`, width: `${imgWidth}px` }, { duration: getRandomInteger(30,40), x: '-100vw', repeat: -1 }, '-=30')
  })

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
}