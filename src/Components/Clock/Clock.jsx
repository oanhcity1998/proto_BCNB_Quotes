import React, { useState, useEffect } from 'react'
import './Clock.css'

export function Clock() {
    
    const [currentTime, setCurrentTime] = useState({hour:format_two_digits(new Date().getHours()), minute: format_two_digits(new Date().getMinutes()), second: format_two_digits(new Date().getSeconds())});
    const [currentDay, setCurrentDay] = useState({weekday: new Date().toLocaleDateString('en-US', { weekday: 'long' }), date: new Date().getDate(), month: new Date().toLocaleDateString('en-US', { month: 'long' }), year: new Date().getFullYear()})

    // add a zero before num. < 10 
    function format_two_digits(n) {
        return n < 10 ? '0' + n : n;
    }


    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCurrentDay({weekday: new Date().toLocaleDateString('en-US', { weekday: 'long' }), date: new Date().getDate(), month: new Date().toLocaleDateString('en-US', { month: 'long' }), year: new Date().getFullYear()})
            setCurrentTime({hour:format_two_digits(new Date().getHours()), minute: format_two_digits(new Date().getMinutes()), second: format_two_digits(new Date().getSeconds())});
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

  return (
    <div className='clock_container'>
        <div className='clock'>
            <div className='rectangle hour'>{currentTime.hour}</div>
            <div className='colon'>:</div>
            <div className='rectangle minute'>{currentTime.minute}</div>
            <div className='colon'>:</div>
            <div className='rectangle second'>{currentTime.second}</div>
        </div>

        <div className='day'>
            <div className='weekdays'>{currentDay.weekday},</div>
            <div className='date'>{currentDay.date}</div>
            <div className='month'>{currentDay.month}</div>
            <div className='year'>{currentDay.year}</div>
        </div>
    </div>
  )
}
