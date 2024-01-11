import React from 'react'

interface ShortArrowSlideshowProps {
    width?: string
    height?: string
    additionalClasses?: string
    additionalPathClasses?: string
}

const ShortArrowSlideshow = ({width = '11', height = '21', additionalClasses = '', additionalPathClasses = ''}: ShortArrowSlideshowProps) => {
  return (
    <svg width={width} height={height} className={additionalClasses} viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={additionalPathClasses} fillRule="evenodd" clipRule="evenodd" d="M3.01826 0.930055C2.32799 0.205331 1.20892 0.205087 0.51837 0.92951C-0.172587 1.65436 -0.172819 2.83013 0.517852 3.55528L7.06568 10.43C7.10252 10.4687 7.10252 10.5314 7.06568 10.57L0.517851 17.4447C-0.17282 18.1699 -0.172587 19.3457 0.518371 20.0705C1.20892 20.7949 2.32799 20.7947 3.01826 20.07L10.1987 12.5311C11.2671 11.4093 11.2671 9.59068 10.1987 8.46896L3.01826 0.930055Z"/>
    </svg>
  )
}

export default ShortArrowSlideshow