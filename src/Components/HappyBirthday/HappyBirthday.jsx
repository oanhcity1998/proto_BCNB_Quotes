import React from 'react'
import './HappyBirthday.css'
import bdayIcon from '../Assets/happy-birthday.png'

export function HappyBirthday() {

  return (
    <div className='bd_button'>
        <img className='bd_icon' src={bdayIcon} alt=''/>
    </div>
  )
}
