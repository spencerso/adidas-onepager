import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { initAnimations } from '~scripts/animations'
import Head from 'next/head'
import styles from '~styles/index.module.scss'
import cn from 'classnames'

function HomePage() {
  const warsawAssets = []
  const donutRelayAssets = []
  const smlProductAssets = []
  const asuoAssets = []
  const wrapperRef = useRef()
  const refObjs = []

  const photographyAssets = [
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/c3c9802c-57c8-46db-9817-8cfc600189a2_rw_1200.jpg?h=b1980d26a811e6ddf9485bf138f474e0',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/0afe1d74-ef18-4820-a82b-ffc231949d7e_rw_1200.jpg?h=7cbc247a5fedc14fb01d4f75ab890136',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/eff6e547-1058-42cf-bdd8-62e74020f49d_rw_1200.jpg?h=121ea34db46401889253e6e14cd55bf3',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/6ca4ecd5-bd34-491a-95ea-48f4601b7584_rw_1200.jpg?h=cb410f17a96f96e6efe9248fbe8562d2',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/15db9db3-13c6-4479-8caa-78e83d5e5f4b_rw_1920.jpg?h=e832b83f77074a60544f516059638ae3',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/679191b1-3d5e-4c79-b878-34e295e5a12a_rw_1200.jpg?h=eab82fd0d3b66201902552c87054a16b',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/84c9336b-e5c4-4fae-a284-460784d4dc22_rw_1200.jpg?h=07b6beeebe4011f481df3a3909f53bdd',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/1528d5ee-0bc5-409d-b7fe-4db701fb7ad6_rw_1200.jpg?h=59ac4145947e378c10d7c90c0e129690',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/58d297b1-8b86-483b-8253-3365fc42f57e_rw_1200.jpg?h=2a230a51c19c1f885d449957938f7746',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/aae8b4e3-2dea-4263-9729-e351ad27632f_rw_1200.jpg?h=caff4ac1bf20e44817f0f68c717c6a23',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/4292eab2-b132-4268-87bf-8f606c5a05b3_rw_1200.jpg?h=83c214b8dd801aa9f0c813bc038416f7',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/83895fbd-e308-4b8d-8fc9-c40526c0084c_rw_1200.jpg?h=f8cfbd4ee8d42574e5c46d7a2562a2ce',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/6b3e763d-7d2d-4551-ac1b-9271aa48fb75_rw_1200.jpg?h=25a7341dce830fd2356bac59cbacad43',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/cb8639e4-9482-46cb-84c1-d655e379160d_rw_1200.jpg?h=b7d357cf8ed21f5adca77e4ad046157a',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/5de0ac4b-28a8-4877-bf34-d81bb7102b79_rw_1200.jpg?h=de0e6ba303d6f197d4f7ccecba312151',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/e98d40c5-9977-401f-9868-2e876c8adfc0_rw_1920.jpg?h=7618ad7ee1f827b04d2452336b469e52',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/2ce88a3a-9915-4064-9a59-3a44a47ae62f_rw_1200.jpg?h=aad290718f67ad92c5968cb01981a209',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/09932f3f-7907-4a13-b6aa-019a91c79a80_rw_1200.jpg?h=23cace5da420806ea009dbf71401e0c6',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/4485ccb7-3eab-4b13-a367-44dbc80aba9a_rw_1200.jpg?h=5081081a50f45d7a067053ef9546f64f',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/b11ca800-3e0a-46c6-9d2d-426b4e4f6852_rw_1200.jpg?h=73d829e806d9bf26a7b27601207084c7',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/9cd53901-3e48-4b55-a1bb-8b1d6968e153_rw_1200.jpg?h=6b3c404deab6accc88877f9336bfb19b',
    'https://cdn.myportfolio.com/948b96ca-fec4-4f2b-b872-dbd5aaa5661c/785784d4-63e9-48d4-8c39-de546277709d_rw_1200.jpg?h=c43c2212c3747191e42a8f198c1f6a95'
  ]

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

    if (i < 6) {
      asuoAssets.push(`asuo-inset-0${i}`)
    }
  }

  useEffect(() => {
    refObjs.push(wrapperRef)
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    })
    initAnimations('index', refObjs)
  }, [])

  return (
    <>
      <Head>
        <title>Impossible Is Nothing | Spencer So</title>
        <meta name="keywords" content="Adidas, Impossible Is Nothing, Spencer So, One Pager" />
        <meta name="description" content="My name is Spencer So. I am a student creative from the university of oregon, originally from san jose, ca. this is why Impossible Is Nothing." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </Head>
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
            <div className={cn(styles.sectionContentText, 'profileText')}>Hey, My name is Spencer So. I am a student creative from the University of Oregon, originally from San Jose, CA. this is why <strong>Impossible Is Nothing</strong>.</div>
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
            <div className={cn(styles.sectionContentText, 'sectionContentText')}><strong>Impossible Is Nothing</strong> means I can start my own clothing brand in high school. somuchlove is something I built as a way to stand up for social injustices I have experienced from being an Asian American during the Stop Asian Hate movement to my friend&apos;s transition in middle school.</div>
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
            <div className={cn(styles.sectionContentText, 'sectionContentText')}><strong>Impossible Is Nothing</strong> means finding myself during sophomore year by joining the Warsaw Sports Business Club.</div>
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
          <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
            <div className={cn(styles.navigation, 'navigation')}>
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
          <div className={styles.separator}>&nbsp;</div>
          <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
            <div className={cn(styles.sectionContentText, 'sectionContentText')}><strong>Impossible Is Nothing</strong> is finding an opportunity with the Daily Emerald to learn as I work shooting different photo for various articles and sporting events.
              <p><a href="https://www.dailyemerald.com/users/profile/spencer%20so/" target="_blank">https://www.dailyemerald.com/users/<br/>profile/spencer%20so/</a></p>
            </div>
            <div className={cn(styles.photographyAssetWrapper, 'photographyAssetWrapper')}>
              {photographyAssets.map((asset, index) => {
                return (
                  <div key={index} className={cn(styles.photographyAssetItem, 'photographyAssetItem')}>
                    <img
                      src={asset}
                      alt="Daily Emerald Photos"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={cn(styles.sectionSeven, styles.sectionContainer, 'sectionSeven')}>
          <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
            <div className={cn(styles.navigation, 'navigation')}>
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
          <div className={styles.separator}>&nbsp;</div>
          <div className={cn(styles.sectionContent, styles.sectionTwoContent)}>
            <div className={cn(styles.sectionContentText, 'sectionContentText')}><strong>Impossible Is Nothing</strong> means landing an amazing position with the Associated Students of the University of Oregon as the executive communications secretary of events specializing in the second annual spring concert. 
              <p>The event will take place May 10th at the Cuthbert Amphitheater.</p>
              <p>During this time I have had the chance to manage a $365,000 budget with a 4 artist lineup including a student band.</p>
              <p>While working with the finances I have also learned many other skills including project management, creative direction, marketing, advertising, contracting, legal, and much more.</p>
              <p><strong>Impossible Is Nothing</strong> shows me I can make a difference in any community.</p>
            </div>
            <div className={cn(styles.asuoAssets, 'asuoAssets')}>
              {asuoAssets.map((asset, index) => {
                return (
                  <div key={index} className={cn(styles.asuoAsset, 'asuoAsset')}>
                    <img
                      src={`/images/asuo/${asset}.jpg`}
                      alt="ASUO Student Government Photos"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={cn(styles.sectionEight, styles.sectionContainer, 'sectionEight')}>
          <div className={cn(styles.sectionEightLogo, 'sectionEightLogo')}>
            <img
              src="https://spencerso.github.io/adidas-onepager/images/adidas-logo.png"
              alt="Adidas Logo"
              className={cn(styles.adidasLogo, 'adidasLogo')}
              height={'100%'}
              width={'100%'}
            />
            <p><span className={'tagline-impossible'}>Impossible</span> <span className={'tagline-is'}>Is</span> <span className={'tagline-nothing'}>Nothing</span> <span className={'tagline-final'}>Means Endless Possibilities</span></p>
          </div>
          <div className={cn(styles.sectionSideBar, 'sectionSideBar')}>
            <div className={cn(styles.sectionOneBgGray, styles.sectionSideBarBase)}>&nbsp;</div>
            <div className={cn(styles.sectionOneBgGreen, styles.sectionSideBarOverlay)}>&nbsp;</div>
          </div>
        </div>
        <div className={cn(styles.scrollArrow, 'scrollArrow')}><span>&nbsp;</span></div>
      </div>
    </>
  )
}

export default HomePage;