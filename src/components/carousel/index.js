import React, { useRef, useCallback, useState } from 'react'
import Slider from 'react-slick'
import styles from './index.module.scss'
import cn from 'classnames'

const CarouselArrow = React.memo(({ className = '', onClick }) => {
  return (
    <div className={styles.carouselArrowWrapper} onClick={onClick}>
      <div className={`${styles.carouselArrow} ${className}`}>
        <i />
        <i />
      </div>
    </div>
  )
})

const PaginationItem = React.memo(({ active, onPaginateClick, id, progressBar }) => {
  const goToPage = useCallback(() => {
    onPaginateClick(id)
  }, [id])
  return (
    <span
      onClick={goToPage}
      className={cn(`${styles.carouselPaginationItem} ${
        active ? styles.carouselPaginationActive : ''
      } ${active ? 'carouselPaginationActive' : ''}
      carouselPaginationItem`, {[styles.progressBar]: progressBar})}
    >
      {progressBar &&
        <span className={styles.progressBarWrapper}>
          <span className={styles.progressBarIndicator} />
        </span>
      }
    </span>
  )
})

// Adding displayName to the functional component
CarouselArrow.displayName = 'CarouselArrow'
PaginationItem.displayName = 'PaginationItem'

const Carousel = (props) => {
  const {
    paginationEnabled = true,
    paginationArrow = true,
    onPaginationUpdate = () => {},
    parentCurrentPage = 0,
    progressBar = false,
    className = ''
  } = props
  const sliderRef = useRef()
  const sliderNavRef = useRef()
  const DEFAULT_SLIDER_SETTINGS = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    variableWidth: true,
  }

  const [currentPage, setCurrentPage] = useState(parentCurrentPage)
  const slideCount = props.children.length

  const handlePagination = (index, forcePagination) => {
    if (!sliderRef.current) {
      return
    }
    if (currentPage !== index || forcePagination) {
      setCurrentPage(index)
      onPaginationUpdate(index)
      if (sliderRef?.current) {
        sliderRef.current.slickGoTo(index)
      }
    } else if (currentPage === 0 && index === 0) {
      // TODO: investigate more why this use case is broken
      // Onclick of first nav "button" does nothing
      // currentPage and index are always 0
      setCurrentPage(index)
      onPaginationUpdate(index)
      if (sliderRef?.current) {
        sliderRef.current.slickGoTo(index)
      }
    }
  }

  const gotoPrevPage = useCallback(() => {
    if (!sliderRef.current) {
      return
    }
    sliderRef.current.slickNext()
  }, [])

  const gotoNextPage = useCallback(() => {
    if (!sliderRef.current) {
      return
    }
    sliderRef.current.slickPrev()
  }, [])

  const sliderSettings = {
    ...DEFAULT_SLIDER_SETTINGS,
    ...props,
    // prevArrow: <CarouselArrow onClick={gotoPrevPage} className="carouselArrowPrev" />,
    // nextArrow: <CarouselArrow onClick={gotoNextPage} className="carouselArrowNext" />
  }

  return (
    <>
      <Slider
        className={className}
        {...sliderSettings}
        afterChange={handlePagination}
        ref={(slider) => (sliderRef.current = slider)}
      >
        {props.children}
      </Slider>
      <div className={cn(styles.carouselControls, 'carouselControls')}>
        {paginationArrow && (
          <CarouselArrow
            onClick={gotoNextPage}
            className="carouselArrowPrev"
          />
        )}
        {paginationEnabled && (
          <div
            ref={sliderNavRef}
            className={cn(styles.carouselPagination, 'carouselPagination')}
          >
            {props.children.map((item, idx) => {
              return (
                <PaginationItem
                  active={idx === currentPage}
                  onPaginateClick={handlePagination}
                  key={idx}
                  id={idx}
                  progressBar={progressBar}
                />
              )
            })}
          </div>
        )}
        {paginationArrow && (
          <CarouselArrow
            className={cn(styles.carouselArrowNext, 'carouselArrowNext')}
            onClick={gotoPrevPage}
          />
        )}
      </div>
    </>
  )
}

export default Carousel