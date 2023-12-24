import React from 'react'

interface VideoArrowProps {
    width?: string
    height?: string
    additionalClasses?: string
}

const VideoArrow = ({width = '57', height = '57', additionalClasses = ''}: VideoArrowProps) => {
  return (
    <svg width={width} height={height} className={`fill-black fill ${additionalClasses}`} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_612)">
      <path d="M28.5027 1.64756C43.3088 1.64756 55.3579 13.6912 55.3579 28.5027C55.3579 43.3143 43.3143 55.3579 28.5027 55.3579C13.6912 55.3579 1.64756 43.3088 1.64756 28.5027C1.64756 13.6967 13.6912 1.64756 28.5027 1.64756ZM28.5027 0C12.7576 0 0 12.7576 0 28.5027C0 44.2479 12.7576 57.0055 28.5027 57.0055C44.2479 57.0055 57.0055 44.2479 57.0055 28.5027C57.0055 12.7576 44.2424 0 28.5027 0Z" fill="white"/>
      <path d="M40.1561 27.02L31.424 18.2879L29.9412 19.7707L37.6243 27.4538H15.3604V29.5462H37.6243L29.9412 37.2293L31.424 38.7121L40.1561 29.9856L41.6389 28.5028L40.1561 27.02Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2_612">
      <rect width="57" height="57" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

export default VideoArrow