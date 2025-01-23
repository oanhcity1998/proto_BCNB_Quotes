import React from 'react'
import home from '../Assets/home-2.png'
import { useNavigate } from 'react-router-dom'

export function RandomQuotesButton() {
    const navigate = useNavigate();
    function returnHome(){
        navigate('/');
    }
  return (
    <div className='quote_button_container'>
        <div className='wrap_icon'>
            <div className='quote_icon_container'>
                <img className='home_icon' src={home} alt='home icon' onClick={returnHome}/>
            </div>
        </div>
        
    </div>
  )
}
