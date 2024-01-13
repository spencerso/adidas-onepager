import { useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { initAnimations } from '~scripts/animations'
import Carousel from '~components/carousel'
import styles from '~styles/index.module.scss'
import cn from 'classnames'

function HomePage() {
  // const { ScrollTrigger } = require=('gsap/ScrollTrigger')
  const warsawAssets = []
  const donutRelayAssets = []
  const smlProductAssets = []
  const wrapperRef = useRef()
  const refObjs = []

  for (var i = 0; i < 19; i++) {
    let num = i
    if (i < 10) {
      num = `0${i}`

      if (i < 9) {
        donutRelayAssets.push(`donut-relay-${num}`)
      }
    }
    warsawAssets.push(`adidas-hq-${num}`)
  }

  for (var i = 1; i < 10; i++) {
    smlProductAssets.push(`sml-product-0${i}`)
  }

  // console.log('warsawAssets: ', warsawAssets)
  // console.log('donutRelayAssets: ', donutRelayAssets)

  useEffect(() => {
    refObjs.push(wrapperRef)
    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.normalizeScroll(isIOS() ? false : true)
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    })
    initAnimations('index', refObjs)
  }, [])

  return (
    <div className={styles.onePager} ref={wrapperRef}>
      <div className={cn(styles.sectionOne, styles.sectionContainer, 'sectionOne')}>
        <div className={cn(styles.sectionOneLogo, 'sectionOneLogo')}>
          <img
            src="https://spencerso.github.io/adidas-onepager/images/adidas-logo.png"
            alt="Adidas Logo"
            className={cn(styles.adidasLogo, 'adidasLogo')}
            height={'100%'}
            width={'100%'}
          />
          <p><span className={'tagline-impossible'}>Impossible</span> <span className={'tagline-is'}>Is</span> <span className={'tagline-nothing'}>Nothing</span></p>
        </div>
        <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
      </div>
      <div className={cn(styles.sectionTwo, styles.sectionContainer, 'sectionTwo')}>
        <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
          <div className={cn(styles.navigation, 'navigation')}>
            <ul>
              <li><strong>About Me</strong></li>
              <li>somuchlove</li>
              <li>Warsaw Sports<br/>Business Club</li>
              <li>Daily Emerald</li>
              <li>ASUO</li>
            </ul>
          </div>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
          <div className={cn(styles.imgWrapper, 'profilePhoto')}>
            <img
              src="https://spencerso.github.io/adidas-onepager/images/profile-photo-sm.jpg"
              alt="Profile Photo"
            />
          </div>
          <div className={cn(styles.sectionContentText, 'profileText')}>Hey, My name is Spencer So. I am a student creative from the university of oregon, originally from san jose, ca. this is why <strong>Impossible Is Nothing</strong>.</div>
        </div>
      </div>
      <div className={cn(styles.sectionThree, styles.sectionContainer, 'sectionThree')}>
        <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
          <div className={cn(styles.navigation, 'navigation')}>
            <ul>
              <li>About Me</li>
              <li><strong>somuchlove</strong></li>
              <li>Warsaw Sports<br/>Business Club</li>
              <li>Daily Emerald</li>
              <li>ASUO</li>
            </ul>
          </div>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
          <div className={cn(styles.sectionContentText, 'sectionContentText')}><strong>Impossible Is Nothing</strong> means I can start my own clothing brand in high school. somuchlove is something I built as a way to stand up for social injustices I have experienced from being an Asian American during the Stop Asian Hate movement to my friends transition in middle school.</div>
          <p className={cn(styles.iconographyTitle, 'iconographyTitle')}>Iconography</p>
          <div className={styles.iconography}>
            <span className={'iconographyLabelOne'}>2018</span>
            <div className={'iconCollage'}>
              <img
                src="https://spencerso.github.io/adidas-onepager/images/sml-logos-collage.png"
                alt="SomuchLove Logo Collage"
              />
            </div>
            <span className={cn(styles.iconographyLabelTwo, 'iconographyLabelTwo')}>Present</span>
          </div>
        </div>
      </div>
      <div className={cn(styles.sectionFour, styles.sectionContainer, 'sectionFour')}>
        <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
          <div className={cn(styles.navigation, 'navigation')}>
            <ul>
              <li>About Me</li>
              <li><strong>somuchlove</strong></li>
              <li>Warsaw Sports<br/>Business Club</li>
              <li>Daily Emerald</li>
              <li>ASUO</li>
            </ul>
          </div>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
          <img
            className={cn(styles.backgroundImage, 'backgroundImage')}
            src="https://spencerso.github.io/adidas-onepager/images/sml-products.jpg"
            alt="SomuchLove Product Collage"
          />
          <div className={cn(styles.productsCollage, 'productsCollage')}>
            {smlProductAssets.map((asset, index) => {
              return (
                <div key={index} className={styles.productsCollageItem}>
                  <img
                    src={`https://spencerso.github.io/adidas-onepager/images/sml-products/${asset}.jpg`}
                    alt="SomuchLove Product Collage"
                  />
                </div>
              )
            })}
          </div>
          <div className={cn(styles.sectionContentText, 'sectionContentText')}>somuchlove will become a multi-media company made by artists for artists.</div>
        </div>
      </div>
      <div className={cn(styles.sectionFive, styles.sectionContainer, 'sectionFive')}>
        <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
          <div className={cn(styles.navigation, 'navigation')}>
            <ul>
              <li>About Me</li>
              <li>somuchlove</li>
              <li><strong>Warsaw Sports<br/>Business Club</strong></li>
              <li>Daily Emerald</li>
              <li>ASUO</li>
            </ul>
          </div>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
          <div className={cn(styles.sectionContentText, 'sectionContentText')}>Impossible is nothing means finding myself during sophomore year by joining the Warsaw Sports Business Club.</div>
          <img
            className={cn(styles.warsawAssetDefault, 'warsawAssetDefault')}
            src="https://spencerso.github.io/adidas-onepager/images/warsaw-activities.jpg"
            alt="Warsaw Business Club Adidas Visit"
          />
          <div className={cn(styles.warsawAssets, 'warsawAdidasHq')}>
            {warsawAssets.map((asset, index) => {
              return (
                <div key={index} className={styles.warsawAsset}>
                  <img
                    src={`https://spencerso.github.io/adidas-onepager/images/adidas-hq/${asset}.jpg`}
                    alt="Warsaw Business Club Adidas Visit"
                  />
                </div>
              )
            })}
          </div>
          <div className={cn(styles.sectionContentText, styles.sectionContentTextDivider, 'warsawAdidasHqText')}>Visiting the Adidas campus</div>
          <img
            className={cn(styles.warsawAssetDefault, 'warsawDonutRelayDefault')}
            src="https://spencerso.github.io/adidas-onepager/images/warsaw-events.jpg"
            alt="Warsaw Business Club Events"
          />
          <div className={cn(styles.warsawAssets, 'warsawDonutRelay')}>
            {donutRelayAssets.map((asset, index) => {
              return (
                <div key={index} className={styles.warsawAsset}>
                  <img
                    src={`https://spencerso.github.io/adidas-onepager/images/donut-relay/${asset}.jpg`}
                    alt="Warsaw Business Club Donut Relay"
                  />
                </div>
              )
            })}
          </div>
          <div className={cn(styles.sectionContentText, 'warsawDonutRelayText')}>and Running the 2nd annual Warsaw Donut Relay</div>
        </div>
      </div>
      <div className={cn(styles.sectionSix, styles.sectionContainer, 'sectionSix')}>
        <div className={styles.sectionSideBar}>
          <div className={styles.navigation}>
            <ul>
              <li>About Me</li>
              <li>somuchlove</li>
              <li>Warsaw Sports</li>
              <li>Business Club</li>
              <li><strong>Daily Emerald</strong></li>
              <li>ASUO</li>
            </ul>
          </div>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
        <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
          <div className={styles.sectionContentText}>Impossible is nothing is finding an opportunity with the Daily Emerald to learn as I work shooting   different photo for various articles and sporting events.
            <p><a href="https://www.dailyemerald.com/users/profile/spencer%20so/" target="_blank">https://www.dailyemerald.com/users/<br/>profile/spencer%20so/</a></p></div>
            <Carousel className={styles.carousel}>
              <div className={styles.carouselElement}>
                <img
                  src="https://spencerso.github.io/adidas-onepager/images/sml-products.jpg"
                  alt="SomuchLove Product Collage"
                />
              </div>
              <div className={styles.carouselElement}>
                <img
                  src="https://spencerso.github.io/adidas-onepager/images/sml-products.jpg"
                  alt="SomuchLove Product Collage"
                />
              </div>
              <div className={styles.carouselElement}>
                <img
                  src="https://spencerso.github.io/adidas-onepager/images/sml-products.jpg"
                  alt="SomuchLove Product Collage"
                />
              </div>
            </Carousel>
        </div>
      </div>
      <div className={cn(styles.sectionSeven, styles.sectionContainer, 'sectionSeven')}>
        <div className={styles.sectionSideBar}>
          <div className={styles.navigation}>
            <ul>
              <li>About Me</li>
              <li>somuchlove</li>
              <li>Warsaw Sports</li>
              <li>Business Club</li>
              <li>Daily Emerald</li>
              <li><strong>ASUO</strong></li>
            </ul>
          </div>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
        <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
          <div className={styles.sectionContentText}>Impossible is nothing means landing an amazing position with the Associated Students of the University of Oregon as the executive communications secretary of events specializing in the second annual spring concert. 
            <p>The event will take place May 10th at the Cuthbert Amphitheater.</p>
            <p>During this time I have had the chance to manage a $365,000 budget with a 4 artist lineup including a student band.</p>
            <p>While working with the finances I have also learned many other skills including project management, creative direction, marketing, advertising, contracting, legal, and much more.</p>
            <p>Impossible is nothing shows me I can make a difference in any community.</p>
          </div>
        </div>
      </div>
      <div className={cn(styles.sectionEight, styles.sectionContainer, 'sectionEight')}>
        <div className={styles.sectionEightLogo}>
          <img
            src="https://spencerso.github.io/adidas-onepager/images/adidas-logo.png"
            alt="Adidas Logo"
            className={styles.adidasLogo}
            height={'100%'}
            width={'100%'}
          />
          <p>Impossible Means Nothing is Endless Possibilities</p>
        </div>
        <div className={cn(styles.sectionSideBar)}>
          <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
          <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;