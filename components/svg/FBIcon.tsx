import React from 'react'

interface FBIconProps {
    width?: string
    height?: string
    additionalClasses?: string
}

const FBIcon = ({width = '27', height = '27', additionalClasses = ''}: FBIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={`scale-[0.9] additionalClasses`} viewBox="0,0,256,256">
<g className='social-icon' fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
</svg>
  )
}

export default FBIcon