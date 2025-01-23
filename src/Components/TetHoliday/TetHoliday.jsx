import React from 'react'
import tet_icon from '../Assets/2025.png'
import {useNavigate} from 'react-router-dom'

export function TetHoliday() {
  const navigate = useNavigate()
  function toTetHoliday(){
    navigate('/TetHoliday')
  }
  return (
    <div className='tet_container' onClick={toTetHoliday}>
        <div className='tet_icon_container'>
            <img className='tet_icon' src={tet_icon} alt='icon Tết 2025'/>
            {/* <img className='ribbon' src={red_ribbon} alt=''/> */}
            {/* <div className='small_time'>1000</div> */}
        </div>
        
    </div>
  )
}
