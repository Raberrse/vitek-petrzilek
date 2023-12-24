import React from 'react'

interface HeroArrowProps {
    width?: string
    height?: string
    additionalClasses?: string
}

const HeroArrow = ({width = '30', height = '39', additionalClasses = ''}: HeroArrowProps) => {
  return (
    <svg width={width} height={height} className={additionalClasses} viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8986 49.0463L40 31.907L37.096 28.9965L22.0489 44.077L22.0489 0.377074L17.9511 0.377074L17.9511 44.077L2.90401 28.9965L4.49288e-06 31.907L17.0906 49.0463L19.9946 51.9567L22.8986 49.0463Z" fill="white"/>
    </svg>
  )
}

export default HeroArrow