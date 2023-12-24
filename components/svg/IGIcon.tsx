import React from 'react'

interface IGIconProps {
    width?: string
    height?: string
    additionalClasses?: string
}

const IGIcon = ({width = '25', height = '25', additionalClasses = ''}: IGIconProps) => {
  return (
    <div className={'w-[25px] h-[25px] bg-white'}>
    </div>

  )
}

export default IGIcon