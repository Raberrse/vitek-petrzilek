import React from 'react'

interface FBIconProps {
    width?: string
    height?: string
    additionalClasses?: string
}

const FBIcon = ({width = '25', height = '25', additionalClasses = ''}: FBIconProps) => {
  return (
    <div className={'w-[25px] h-[25px] bg-white'}>
    </div>

  )
}

export default FBIcon