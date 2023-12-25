import React from 'react'

interface VideoArrowProps {
    width?: string
    height?: string
    additionalClasses?: string
    arrowAdditionalClasses?: string
}

const VideoArrow = ({width = '57', height = '57', additionalClasses = '', arrowAdditionalClasses = ''}: VideoArrowProps) => {
  return (
    <svg width={width} height={height} className={` ${additionalClasses}`} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.1561 27.02L31.424 18.2879L29.9412 19.7707L37.6243 27.4538H15.3604V29.5462H37.6243L29.9412 37.2293L31.424 38.7121L40.1561 29.9856L41.6389 28.5028L40.1561 27.02Z" className={`${arrowAdditionalClasses}`} fill="white"/>
      <defs>
      <clipPath id="clip0_2_612">
      <rect width="57" height="57" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

export default VideoArrow