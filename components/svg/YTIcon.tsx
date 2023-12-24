import React from 'react'

interface YTIconProps {
    width?: string
    height?: string
    additionalClasses?: string
}

const YTIcon = ({width = '25', height = '25', additionalClasses = ''}: YTIconProps) => {
  return (
    <div className={'w-[25px] h-[25px] bg-white'}>
    </div>

  )
}

export default YTIcon