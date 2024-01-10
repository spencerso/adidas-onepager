import gsap from "gsap"

export function initAnimations(page) {
  if (page === 'index') {
    onePagerAnimations()
  }
}

export function onePagerAnimations() {
  gsap.set(refs.mainHeroWrapper.current, {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: refs.rotatorAnimations.current,
      start: "top top",
      end: window.innerHeight * 22,
      scrub: true,
      pin: true,
      markers: false,
    },
  })
    .to(refs.rotatorText.current, { duration: 0, display: 'block' })
}